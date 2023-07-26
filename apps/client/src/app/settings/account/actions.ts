'use server'

import { db } from '@/lib/db'

import { AccountFormValues } from './account-form'

interface UpdateAccountResult {
  ok: boolean
  errorField?: 'email' | 'root'
  errorMessage?: string
}

export async function updateAccount(
  userId: string,
  account: AccountFormValues
): Promise<UpdateAccountResult> {
  try {
    await db.user.update({
      where: { id: userId },
      data: {
        email: account.email
      }
    })

    return { ok: true }
  } catch (error) {
    console.error(error)
    return { ok: false }
  }
}
