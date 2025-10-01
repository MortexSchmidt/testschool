const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function seed() {
  console.log('🌱 Додавання тестових даних...')
  
  try {
    // Створення предметів
    const subjects = [
      { name: 'Математика' },
      { name: 'Українська мова' },
      { name: 'Англійська мова' },
      { name: 'Історія України' },
      { name: 'Фізика' },
      { name: 'Хімія' },
      { name: 'Біологія' },
      { name: 'Географія' },
      { name: 'Фізична культура' },
      { name: 'Інформатика' }
    ]
    
    for (const subject of subjects) {
      await prisma.subject.upsert({
        where: { name: subject.name },
        update: {},
        create: subject
      })
    }
    console.log('📚 Предмети створені')
    
    // Створення класів
    const classes = [
      { name: '5-А', description: 'П\'ятий клас А' },
      { name: '5-Б', description: 'П\'ятий клас Б' },
      { name: '6-А', description: 'Шостий клас А' },
      { name: '6-Б', description: 'Шостий клас Б' },
      { name: '7-А', description: 'Сьомий клас А' },
      { name: '8-А', description: 'Восьмий клас А' },
      { name: '9-А', description: 'Дев\'ятий клас А' },
      { name: '10-А', description: 'Десятий клас А' },
      { name: '11-А', description: 'Одинадцятий клас А' }
    ]
    
    for (const classData of classes) {
      await prisma.class.upsert({
        where: { name: classData.name },
        update: {},
        create: classData
      })
    }
    console.log('🏛️ Класи створені')
    
    // Створення прикладу розкладу для 5-А класу
    const fifthAClass = await prisma.class.findUnique({
      where: { name: '5-А' }
    })
    
    const mathSubject = await prisma.subject.findUnique({
      where: { name: 'Математика' }
    })
    
    const ukrainianSubject = await prisma.subject.findUnique({
      where: { name: 'Українська мова' }
    })
    
    if (fifthAClass && mathSubject && ukrainianSubject) {
      // Понеділок
      await prisma.schedule.upsert({
        where: {
          classId_dayOfWeek_startTime: {
            classId: fifthAClass.id,
            dayOfWeek: 1,
            startTime: '08:00'
          }
        },
        update: {},
        create: {
          classId: fifthAClass.id,
          subjectId: mathSubject.id,
          dayOfWeek: 1, // Понеділок
          startTime: '08:00',
          endTime: '08:45'
        }
      })
      
      await prisma.schedule.upsert({
        where: {
          classId_dayOfWeek_startTime: {
            classId: fifthAClass.id,
            dayOfWeek: 1,
            startTime: '09:00'
          }
        },
        update: {},
        create: {
          classId: fifthAClass.id,
          subjectId: ukrainianSubject.id,
          dayOfWeek: 1, // Понеділок
          startTime: '09:00',
          endTime: '09:45'
        }
      })
      
      console.log('📅 Приклад розкладу створений')
    }
    
    console.log('✅ Тестові дані додані успішно!')
    
  } catch (error) {
    console.error('❌ Помилка:', error.message)
  } finally {
    await prisma.$disconnect()
  }
}

seed()