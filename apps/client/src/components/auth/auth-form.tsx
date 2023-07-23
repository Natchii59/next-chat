'use client'

import { Button, Input, Label } from 'ui'

import { Icons } from '../icons'

export function AuthForm() {
  return (
    <div className='grid gap-6'>
      <form onSubmit={e => e.preventDefault()}>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
              id='email'
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
            />
          </div>
          <Button>
            {false && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
            Sign In with Email
          </Button>
        </div>
      </form>

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
        <Button variant='outline'>
          {false ? (
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
          ) : (
            <Icons.github className='mr-2 h-4 w-4' />
          )}{' '}
          Github
        </Button>

        <Button variant='outline'>
          {false ? (
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
