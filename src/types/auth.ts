import { DefaultSession } from "next-auth"

export enum Role {
  STUDENT = "STUDENT",
  TEACHER = "TEACHER", 
  ADMIN = "ADMIN"
}

export interface Class {
  id: string
  name: string
  description?: string | null
  teacherId?: string | null
  createdAt: Date
  updatedAt: Date
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: Role
      classId?: string | null
      class?: Class | null
    } & DefaultSession["user"]
  }

  interface User {
    id: string
    role: Role
    classId?: string | null
    class?: Class | null
  }
}