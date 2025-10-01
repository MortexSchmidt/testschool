# 🏫 Шкільний Портал

**Повнофункціональний веб-додаток для управління школою на українській мові**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MortexSchmidt/testschool)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/MortexSchmidt/testschool)

## ✨ Функціональність

- 🔐 **Авторизація через Google OAuth** - безпечний вхід
- 👥 **Система ролей** - Учні, Вчителі, Адміністратори
- 🏛️ **Управління класами** - 9 готових класів (5-А до 11-А)  
- 📚 **10 навчальних предметів** - готові до використання
- 📅 **Розклад уроків** - створення та перегляд розкладу
- ⚙️ **Адміністративна панель** - повне управління системою
- 💾 **SQLite база даних** - локальна, безкоштовна
- 🇺🇦 **Українська локалізація** - повністю на українській мові

## 🚀 Швидкий старт

### 1. Клонуйте репозиторій
\`\`\`bash
git clone https://github.com/MortexSchmidt/testschool.git
cd testschool
npm install
\`\`\`

### 2. Налаштуйте Google OAuth
**Детальна інструкція**: [GOOGLE_OAUTH_SETUP.md](./GOOGLE_OAUTH_SETUP.md)

1. Перейдіть до [Google Cloud Console](https://console.cloud.google.com/)
2. Створіть проект та OAuth Client ID
3. Оновіть \`.env\`:
\`\`\`env
GOOGLE_CLIENT_ID="ваш-client-id"
GOOGLE_CLIENT_SECRET="ваш-client-secret"
\`\`\`

### 3. Запустіть проект
\`\`\`bash
npm run dev
\`\`\`

**Відкрийте http://localhost:3000** 🎉

## 👑 Адміністратор

**Email \`neruka783@gmail.com\` автоматично отримує права адміністратора!**

## 📋 Готові дані

- ✅ **10 предметів**: Математика, Українська мова, Англійська мова, Історія України, Фізика, Хімія, Біологія, Географія, Фізкультура, Інформатика
- ✅ **9 класів**: 5-А, 5-Б, 6-А, 6-Б, 7-А, 8-А, 9-А, 10-А, 11-А
- ✅ **Приклад розкладу** для класу 5-А

## 🛠️ Технології

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **База даних**: SQLite + Prisma ORM  
- **Авторизація**: NextAuth.js + Google OAuth
- **Хостинг**: Готово для Vercel/Netlify

## 📱 Можливості за ролями

### 👨‍🎓 Учень
- Перегляд розкладу свого класу
- Доступ до уроків
- Особистий кабінет

### 👨‍🏫 Вчитель  
- Управління класами
- Створення уроків
- Перегляд розкладу

### ⚙️ Адміністратор
- Управління користувачами
- Створення класів та предметів
- Налаштування розкладу
- Призначення ролей

## 📁 Структура проекту

\`\`\`
src/
├── app/
│   ├── api/auth/[...nextauth]/     # OAuth конфігурація
│   ├── layout.tsx                  # Головний layout
│   └── page.tsx                    # Головна сторінка
├── components/
│   ├── Dashboard.tsx               # Панель управління
│   ├── LoginButton.tsx             # Кнопка входу
│   └── Providers.tsx               # Session provider
├── lib/
│   ├── auth.ts                     # NextAuth конфігурація
│   └── prisma.ts                   # Prisma клієнт
└── types/
    └── auth.ts                     # TypeScript типи

prisma/
├── schema.prisma                   # Схема БД
├── dev.db                         # SQLite БД
└── migrations/                    # Міграції
\`\`\`

## 🔧 Корисні команди

\`\`\`bash
# Перевірити базу даних
node check-db.js

# Додати тестові дані  
node seed.js

# Переглянути БД у браузері
npx prisma studio

# Збірка для production
npm run build
\`\`\`

## 🚀 Розгортання

### Vercel (рекомендується)
1. Форкніть репозиторій
2. Підключіть до Vercel
3. Додайте змінні середовища
4. Розгорніть!

### Netlify
1. Форкніть репозиторій  
2. Підключіть до Netlify
3. Налаштуйте збірку: \`npm run build\`
4. Додайте змінні середовища

## 💰 Чому безкоштовно?

- ✅ SQLite - локальна база даних
- ✅ Google OAuth - безкоштовний для особистого використання
- ✅ Vercel/Netlify - безкоштовний хостинг
- ✅ Всі технології - open source

## 📄 Документація

- [Налаштування Google OAuth](./GOOGLE_OAUTH_SETUP.md)
- [Розгортання](./DEPLOYMENT.md)
- [Copilot інструкції](./.github/copilot-instructions.md)

## 🤝 Внесок

Contributions welcome! Відкрийте Issue або Pull Request.

## 📄 Ліцензія

MIT License - використовуйте вільно!

---

**Створено спеціально для української школи з ❤️🇺🇦**

[⭐ Поставте зірку, якщо проект сподобався!](https://github.com/MortexSchmidt/testschool/stargazers)