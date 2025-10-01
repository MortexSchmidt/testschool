import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "./prisma"
import { Role } from "@/types/auth"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    session: async ({ session, user }) => {
      if (session?.user) {
        session.user.id = user.id
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          include: { class: true }
        })
        session.user.role = (dbUser?.role as Role) || Role.STUDENT
        session.user.classId = dbUser?.classId
        session.user.class = dbUser?.class
      }
      return session
    },
    signIn: async ({ user, account, profile }) => {
      if (account?.provider === "google") {
        // Перевіряємо, чи це адміністратор
        if (user.email === "neruka783@gmail.com") {
          await prisma.user.upsert({
            where: { email: user.email! },
            update: { role: "ADMIN" },
            create: {
              email: user.email!,
              name: user.name!,
              image: user.image,
              role: "ADMIN",
            },
          })
        }
      }
      return true
    },
  },
  session: {
    strategy: "database",
  },
  pages: {
    signIn: "/auth/signin",
  },
}