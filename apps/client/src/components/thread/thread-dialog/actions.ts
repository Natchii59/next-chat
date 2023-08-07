'use server'

import { Thread } from '@prisma/client'

import { db } from '@/lib/db'
import { getCurrentUser } from '@/lib/session'

import { ThreadFormValues } from './new-thread-form'

type PostThreadResult = { ok: false } | { ok: true; thread: Thread }

export async function postThread(
  data: ThreadFormValues
): Promise<PostThreadResult> {
  try {
    const user = await getCurrentUser()

    const thread = await db.thread.create({
      data: {
        authorId: user.id,
        text: data.text
      }
    })

    return { ok: true, thread }
  } catch (err) {
    console.error(err)
    return { ok: false }
  }
}
