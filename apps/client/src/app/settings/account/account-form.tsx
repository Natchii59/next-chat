'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import type { User } from '@prisma/client'
import { useForm } from 'react-hook-form'
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  toast
} from 'ui'
import { z } from 'zod'

import { Icons } from '@/components/icons'

import { updateAccount } from './actions'

const accountFormSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.'
  })
})

export type AccountFormValues = z.infer<typeof accountFormSchema>

interface AccountFormProps {
  user: Pick<User, 'id' | 'email'>
}

export function AccountForm({ user }: AccountFormProps) {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      email: user.email ?? ''
    },
    mode: 'onChange'
  })

  async function onSubmit(data: AccountFormValues) {
    setIsLoading(true)

    const result = await updateAccount(user.id, data)

    setIsLoading(false)

    if (!result.ok) {
      if (result.errorField || result.errorMessage) {
        return form.setError(result.errorField ?? 'root', {
          message: result.errorMessage ?? 'Something went wrong.'
        })
      } else {
        return toast({
          title: 'Something went wrong.',
          description: 'Your sign in request failed. Please try again.',
          variant: 'destructive'
        })
      }
    }

    toast({
      title: 'Account updated.',
      description: 'Your account has been updated.'
    })

    router.refresh()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder='name@example.com' {...field} />
              </FormControl>
              <FormDescription>
                This is the email address that you use to sign in to your
                account.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>
          {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
          <span>Update account</span>
        </Button>
      </form>
    </Form>
  )
}
