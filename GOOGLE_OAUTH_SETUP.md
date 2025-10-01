# 🔐 Налаштування Google OAuth (БЕЗКОШТОВНО)

## 📋 Покрокова інструкція

### 1. Створіть Google проект

1. **Перейдіть до Google Cloud Console**
   - Відкрийте https://console.cloud.google.com/
   - Увійдіть у свій Google акаунт

2. **Створіть новий проект**
   - Натисніть "Select a project" вгорі
   - Натисніть "NEW PROJECT"
   - Назвіть проект (наприклад, "School Portal")
   - Натисніть "CREATE"

### 2. Налаштуйте OAuth

1. **Увімкніть API**
   - У лівому меню виберіть "APIs & Services" → "Library"
   - Знайдіть "Google+ API" або "Google Identity API"
   - Натисніть на API та "ENABLE"

2. **Налаштуйте OAuth consent screen**
   - Перейдіть до "APIs & Services" → "OAuth consent screen"
   - Виберіть "External" → "CREATE"
   - Заповніть обов'язкові поля:
     - App name: "Шкільний Портал"
     - User support email: ваш email
     - Developer contact: ваш email
   - Натисніть "SAVE AND CONTINUE"
   - На наступних сторінках можете просто натискати "SAVE AND CONTINUE"

3. **Створіть OAuth Client ID**
   - Перейдіть до "APIs & Services" → "Credentials"
   - Натисніть "+ CREATE CREDENTIALS" → "OAuth 2.0 Client IDs"
   - Application type: "Web application"
   - Name: "School Portal Web Client"
   - **Authorized JavaScript origins**: `http://localhost:3000`
   - **Authorized redirect URIs**: `http://localhost:3000/api/auth/callback/google`
   - Натисніть "CREATE"

4. **Скопіюйте дані**
   - Скопіюйте "Client ID" та "Client secret"

### 3. Оновіть .env файл

Відкрийте файл `.env` та замініть:

```env
GOOGLE_CLIENT_ID="ваш-client-id-тут"
GOOGLE_CLIENT_SECRET="ваш-client-secret-тут"
```

### 4. Запустіть проект

```bash
npm run dev
```

Відкрийте http://localhost:3000 та спробуйте увійти через Google!

## 🎯 Особливості

- ✅ **Повністю безкоштовно** - використовується SQLite база даних
- ✅ **neruka783@gmail.com** автоматично стає адміністратором
- ✅ **Система ролей** - учні, вчителі, адміністратори
- ✅ **Готово до використання** - всі компоненти створені

## ⚠️ Важливо

- OAuth працює тільки з `http://localhost:3000` для локальної розробки
- Для production потрібно буде додати реальний домен в Google Console
- SQLite база даних зберігається в файлі `prisma/dev.db`

## 🔍 Перевірка роботи

1. Відкрийте http://localhost:3000
2. Натисніть "Увійти через Google"
3. Виберіть свій Google акаунт
4. Дозвольте доступ
5. Ви повинні потрапити в панель управління!

Якщо увійдете з email `neruka783@gmail.com` - отримаете права адміністратора! 👑