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

import { updateProfile } from './actions'

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.'
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.'
    }),
  displayName: z.string().max(30, {
    message: 'Display name must not be longer than 30 characters.'
  })
})

export type ProfileFormValues = z.infer<typeof profileFormSchema>

interface ProfileFormProps {
  user: Pick<User, 'id' | 'username' | 'name'>
}

export function ProfileForm({ user }: ProfileFormProps) {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: user.username,
      displayName: user.name ?? ''
    },
    mode: 'onChange'
  })

  async function onSubmit(data: ProfileFormValues) {
    setIsLoading(true)

    const result = await updateProfile(user.id, data, {
      usernameUpdated: user.username !== data.username
    })

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
      title: 'Profile updated.',
      description: 'Your profile has been updated.'
    })

    router.refresh()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='Your username' {...field} />
              </FormControl>
              <FormDescription>This is your public username.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='displayName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Display Name</FormLabel>
              <FormControl>
                <Input placeholder='Your name' {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>
          {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
          <span>Update profile</span>
        </Button>
      </form>
    </Form>
  )
}
