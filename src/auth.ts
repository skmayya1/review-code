import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import  Github from "next-auth/providers/github"  
import Google from "next-auth/providers/google"
import prisma from "./lib/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
   adapter : PrismaAdapter(prisma),
   providers: [
    Github({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
        signIn: '/oauth/signin',
  },
  session: {
    strategy: 'jwt'
  }
})