import { env } from '@/env.mjs'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { AuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import GithubProvider, { GithubProfile } from 'next-auth/providers/github'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import { createTransport } from 'nodemailer'

import { SignInHtml } from '@/components/emails/sign-in'

import { db } from './db'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  pages: {
    signIn: '/login'
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30 // 30 days
  },
  providers: [
    GithubProvider<GithubProfile>({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true
    }),
    GoogleProvider<GoogleProfile>({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true
    }),
    EmailProvider({
      server: {
        host: env.EMAIL_SERVER_HOST,
        port: env.EMAIL_SERVER_PORT,
        auth: {
          user: env.EMAIL_SERVER_USER,
          pass: env.EMAIL_SERVER_PASSWORD
        }
      },
      from: env.EMAIL_FROM,
      maxAge: 60 * 60 * 2, // 2 hours
      sendVerificationRequest: async ({ identifier, url, provider }) => {
        const { host } = new URL(url)

        const transport = createTransport(provider.server)
        const result = await transport.sendMail({
          to: identifier,
          from: provider.from,
          subject: `Sign in to ${host}`,
          html: SignInHtml({ actionUrl: url })
        })

        const failed = result.rejected.concat(result.pending).filter(Boolean)
        if (failed.length) {
          throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`)
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.username = user.username
      } else {
        const dbUser = await db.user.findUnique({
          where: { id: token.sub }
        })

        if (dbUser) {
          token.email = dbUser.email
          token.username = dbUser.username
          token.name = dbUser.name
          token.image = dbUser.image
        }
      }

      return token
    },
    session: ({ session, token }) => {
      if (token) {
        session.user.id = token.sub
        session.user.email = token.email
        session.user.username = token.username
        session.user.name = token.name
        session.user.image = token.picture
      }

      return session
    }
  }
}
