const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  console.log('🔍 Перевірка бази даних...')
  
  try {
    // Перевірка підключення
    await prisma.$connect()
    console.log('✅ База даних підключена')
    
    // Перевірка кількості користувачів
    const userCount = await prisma.user.count()
    console.log(`👥 Кількість користувачів: ${userCount}`)
    
    // Перевірка кількості класів
    const classCount = await prisma.class.count()
    console.log(`🏛️ Кількість класів: ${classCount}`)
    
    // Перевірка кількості предметів
    const subjectCount = await prisma.subject.count()
    console.log(`📚 Кількість предметів: ${subjectCount}`)
    
    if (userCount === 0) {
      console.log('ℹ️ База даних порожня - це нормально для першого запуску')
      console.log('🚀 Увійдіть через Google на сайті для створення першого користувача')
    }
    
    console.log('✅ Перевірка завершена успішно!')
    
  } catch (error) {
    console.error('❌ Помилка:', error.message)
  } finally {
    await prisma.$disconnect()
  }
}

main()