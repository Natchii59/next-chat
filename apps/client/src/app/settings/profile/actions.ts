'use server'

import { db } from '@/lib/db'

import { ProfileFormValues } from './profile-form'

interface UpdateProfileAdditionalData {
  usernameUpdated: boolean
}

interface UpdateProfileResult {
  ok: boolean
  errorField?: 'displayName' | 'username' | 'root'
  errorMessage?: string
}

export async function updateProfile(
  userId: string,
  profile: ProfileFormValues,
  additionalData: UpdateProfileAdditionalData
): Promise<UpdateProfileResult> {
  try {
    if (additionalData.usernameUpdated) {
      const usernameExists = await db.user.findUnique({
        where: { username: profile.username },
        select: { username: true }
      })

      if (usernameExists?.username) {
        return {
          ok: false,
          errorField: 'username',
          errorMessage: 'Username already exists'
        }
      }
    }

    await db.user.update({
      where: { id: userId },
      data: {
        name: profile.displayName.length > 0 ? profile.displayName : null,
        username: profile.username
      }
    })

    return { ok: true }
  } catch (error) {
    console.error(error)
    return { ok: false }
  }
}
