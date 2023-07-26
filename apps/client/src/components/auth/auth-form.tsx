'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import {
  Button,
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

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address'
  })
})

export function AuthForm() {
  const searchParams = useSearchParams()

  const [isEmailLoading, setIsEmailLoading] = useState<boolean>(false)
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ''
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsEmailLoading(true)

    const signInResult = await signIn('email', {
      email: values.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams.get('callbackUrl') ?? '/'
    })

    setIsEmailLoading(false)

    if (!signInResult?.ok) {
      return toast({
        title: 'Something went wrong.',
        description: 'Your sign in request failed. Please try again.',
        variant: 'destructive'
      })
    }

    return toast({
      title: 'Check your email',
      description: 'We sent you a login link. Be sure to check your spam too.'
    })
  }

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

      <div className='grid grid-cols-2 gap-2'>
        <Button
          variant='outline'
          onClick={() => {
            setIsGithubLoading(true)
            signIn('github', {
              callbackUrl: searchParams.get('callbackUrl') ?? '/'
            })
          }}
          disabled={isGithubLoading || isGoogleLoading}
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
            setIsGoogleLoading(true)
            signIn('google', {
              callbackUrl: searchParams.get('callbackUrl') ?? '/'
            })
          }}
          disabled={isGithubLoading || isGoogleLoading}
        >
          {isGoogleLoading ? (
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
          ) : (
            <Icons.google className='mr-2 h-4 w-4' />
          )}{' '}
          Google
        </Button>
      </div>
    </div>
  )
}
