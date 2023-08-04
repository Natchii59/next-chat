'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Button,
  DialogFooter,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  TextareaAutosize,
  toast
} from 'ui'
import { z } from 'zod'

import { Icons } from '@/components/icons'

const threadFormSchema = z.object({
  text: z
    .string()
    .min(1, {
      message: 'Please enter a thread.'
    })
    .max(280, {
      message: 'Your thread cannot be longer than 280 characters.'
    })
})

export type ThreadFormValues = z.infer<typeof threadFormSchema>

export function NewThreadForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<ThreadFormValues>({
    resolver: zodResolver(threadFormSchema),
    defaultValues: {
      text: ''
    },
    mode: 'onChange'
  })

  async function onSubmit(data: ThreadFormValues) {
    setIsLoading(true)

    console.log(data)
    // const result = await updateAccount(user.id, data)

    setIsLoading(false)

    toast({
      title: 'Thread posted.',
      description: 'Your thread has been posted.'
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='text'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextareaAutosize {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button type='submit'>
            {isLoading && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            <span>Post thread</span>
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
