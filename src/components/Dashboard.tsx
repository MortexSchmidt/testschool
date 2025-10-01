"use client"

import { useSession, signOut } from "next-auth/react"
import { Role } from "@/types/auth"
import { useState } from "react"

export default function Dashboard() {
  const { data: session } = useSession()
  const [activeTab, setActiveTab] = useState("schedule")

  if (!session) return null

  const isAdmin = session.user.role === Role.ADMIN
  const isTeacher = session.user.role === Role.TEACHER
  const isStudent = session.user.role === Role.STUDENT

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">🏫 Шкільний Портал</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img
                  src={session.user.image || ""}
                  alt={session.user.name || ""}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">
                  {session.user.name}
                </span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {session.user.role === Role.ADMIN && "Адміністратор"}
                  {session.user.role === Role.TEACHER && "Вчитель"}
                  {session.user.role === Role.STUDENT && "Учень"}
                </span>
              </div>
              <button
                onClick={() => signOut()}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Вийти
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-lg shadow p-6">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab("schedule")}
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      activeTab === "schedule"
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    📅 Розклад уроків
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("lessons")}
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      activeTab === "lessons"
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    📚 Уроки
                  </button>
                </li>
                {(isAdmin || isTeacher) && (
                  <li>
                    <button
                      onClick={() => setActiveTab("classes")}
                      className={`w-full text-left px-4 py-2 rounded-md ${
                        activeTab === "classes"
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      🏛️ Класи
                    </button>
                  </li>
                )}
                {isAdmin && (
                  <li>
                    <button
                      onClick={() => setActiveTab("admin")}
                      className={`w-full text-left px-4 py-2 rounded-md ${
                        activeTab === "admin"
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      ⚙️ Адміністрування
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow p-6">
              {activeTab === "schedule" && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Розклад уроків
                  </h2>
                  <div className="text-gray-600">
                    <p>Тут буде відображатися розклад уроків для вашого класу.</p>
                    <p className="mt-2">
                      {isStudent && session.user.class
                        ? `Ваш клас: ${session.user.class.name}`
                        : "Клас не призначений"}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "lessons" && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Уроки
                  </h2>
                  <div className="text-gray-600">
                    <p>Тут будуть відображатися уроки та навчальні матеріали.</p>
                  </div>
                </div>
              )}

              {activeTab === "classes" && (isAdmin || isTeacher) && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Управління класами
                  </h2>
                  <div className="text-gray-600">
                    <p>Тут можна управляти класами та учнями.</p>
                  </div>
                </div>
              )}

              {activeTab === "admin" && isAdmin && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Панель адміністратора
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">
                        👥 Користувачі
                      </h3>
                      <p className="text-blue-700 text-sm">
                        Управління учнями, вчителями та їх ролями
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-2">
                        🏛️ Класи
                      </h3>
                      <p className="text-green-700 text-sm">
                        Створення та редагування класів
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-yellow-900 mb-2">
                        📚 Предмети
                      </h3>
                      <p className="text-yellow-700 text-sm">
                        Управління навчальними предметами
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">
                        📅 Розклад
                      </h3>
                      <p className="text-purple-700 text-sm">
                        Створення розкладу для класів
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}