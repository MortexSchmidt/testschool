import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import LoginButton from "@/components/LoginButton"
import Dashboard from "@/components/Dashboard"

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
             Шкільний Портал
          </h1>
          <p className="text-gray-600 mb-8">
            Ласкаво просимо до нашої школи! Увійдіть, щоб отримати доступ до особистого кабінету, розкладу уроків та навчальних матеріалів.
          </p>
          <LoginButton />
        </div>
      </div>
    )
  }

  return <Dashboard />
}
