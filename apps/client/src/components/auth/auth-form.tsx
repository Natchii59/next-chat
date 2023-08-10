'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import {
  Button,
  cn,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  toast
} from 'ui'
import { z } from 'zod'

import { Icons } from '../icons'
import { getSessionAuth } from './actions'

const formSchema = z.object({
  email: z
    .string()
    .email({
      message: 'Please enter a valid email address'
    })
    .toLowerCase()
})

interface AuthFormProps {
  isPreviewMode?: boolean
}

export function AuthForm({ isPreviewMode }: AuthFormProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [isEmailLoading, setIsEmailLoading] = useState<boolean>(false)
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false)

  const [emailSending, setEmailSending] = useState<boolean>(false)
  const [successToast, setSuccessToast] = useState<ReturnType<
    typeof toast
  > | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ''
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsEmailLoading(true)

    const signInResult = await signIn('email', {
      email: values.email,
      redirect: false,
      callbackUrl: '/auth/email/confirm'
    })

    setIsEmailLoading(false)

    if (!signInResult?.ok) {
      return toast({
        title: 'Something went wrong.',
        description: 'Your sign in request failed. Please try again.',
        variant: 'destructive'
      })
    }

    setEmailSending(true)

    setSuccessToast(
      toast({
        title: 'Check your email',
        description:
          'We sent you a Magic Link to sign in. Be sure to check your spam too.'
      })
    )
  }

  useEffect(() => {
    let interval: NodeJS.Timer

    if (emailSending) {
      interval = setInterval(async () => {
        const session = await getSessionAuth()

        if (session) {
          router.push(searchParams.get('callbackUrl') ?? '/')
          setEmailSending(false)
          if (successToast) {
            successToast.update({
              id: successToast.id,
              title: 'You are now signed in.',
              description: 'Welcome back!'
            })
          }
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [emailSending, router, searchParams, successToast])

  return (
    <div className='grid gap-6'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-2'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='sr-only'>Email</FormLabel>
                <FormControl>
                  <Input placeholder='name@example.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit'>
            {isEmailLoading && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            Sign In with Email
          </Button>
        </form>
      </Form>

      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div>

      <div
        className={cn('grid grid-cols-2 gap-2', isPreviewMode && 'relative')}
      >
        <Button
          variant='outline'
          onClick={() => {
            if (isPreviewMode) return
            setIsGithubLoading(true)
            signIn('github', {
              callbackUrl: searchParams.get('callbackUrl') ?? '/'
            })
          }}
          disabled={isPreviewMode || isGithubLoading || isGoogleLoading}
        >
          {isGithubLoading ? (
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
          ) : (
            <Icons.github className='mr-2 h-4 w-4' />
          )}{' '}
          Github
        </Button>

        <Button
          variant='outline'
          onClick={() => {
            if (isPreviewMode) return
            setIsGoogleLoading(true)
            signIn('google', {
              callbackUrl: searchParams.get('callbackUrl') ?? '/'
            })
          }}
          disabled={isPreviewMode || isGithubLoading || isGoogleLoading}
        >
          {isGoogleLoading ? (
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
          ) : (
            <Icons.google className='mr-2 h-4 w-4' />
          )}{' '}
          Google
        </Button>

        {isPreviewMode && (
          <div className='absolute inset-0 flex cursor-not-allowed items-center justify-center rounded-md border bg-muted/90'>
            <span className='text-center text-xs font-medium leading-tight sm:text-base'>
              Sign in with OAuth is not available in preview mode
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
