'use server'

import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'

export async function getSessionAuth() {
  const session = await getServerSession(authOptions)

  return session
}
