# 📋 Інструкції з розгортання

## 🔧 Необхідні налаштування перед розгортанням

### 1. Google OAuth налаштування

1. Перейдіть до [Google Cloud Console](https://console.cloud.google.com/)
2. Створіть новий проект або оберіть існуючий
3. Увімкніть Google+ API або Google Identity API
4. Перейдіть до "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Налаштуйте OAuth consent screen
6. Створіть Web Application з:
   - **Authorized JavaScript origins**: `https://ваш-домен.netlify.app`
   - **Authorized redirect URIs**: `https://ваш-домен.netlify.app/api/auth/callback/google`
7. Скопіюйте Client ID та Client Secret

### 2. Розгортання на Netlify

1. **Створіть обліковий запис на Netlify**
2. **Підключіть GitHub репозиторій**
3. **Налаштуйте змінні середовища** в Settings → Environment variables:
   ```
   NEXTAUTH_URL=https://ваш-домен.netlify.app
   NEXTAUTH_SECRET=ваш-безпечний-ключ-мінімум-32-символи
   GOOGLE_CLIENT_ID=ваш-google-client-id
   GOOGLE_CLIENT_SECRET=ваш-google-client-secret
   DATABASE_URL=ваш-database-url
   ```

### 3. База даних

Для production використайте одну з опцій:
- **Prisma Cloud** (найпростіше)
- **Supabase**
- **Railway**
- **PlanetScale**

### 4. Команди розгортання

```bash
# Збілька проекту
npm run build

# Розгортання (автоматично через Netlify при push в main)
git push origin main
```

## 🎯 Після розгортання

1. Увійдіть через Google з email `neruka783@gmail.com` для отримання прав адміністратора
2. Створіть класи через адміністративну панель
3. Додайте навчальні предмети
4. Призначте вчителів класам
5. Створіть розклад уроків

## ⚠️ Важливе

- Обов'язково замініть `NEXTAUTH_SECRET` на безпечний випадковий ключ
- Налаштуйте правильні redirect URIs в Google Console
- Переконайтеся, що база даних доступна з Netlify

## 🔍 Перевірка

Після розгортання перевірте:
- [ ] Сайт відкривається
- [ ] Авторизація через Google працює
- [ ] База даних підключена
- [ ] Адміністративні права працюють