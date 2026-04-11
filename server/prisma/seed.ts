import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({
  adapter,
})

async function main() {
  await prisma.role.createMany({
    data: [
      { role: 'SuperAdmin' },
      { role: 'Editor' },
    ],
    skipDuplicates: true,
  })

  await prisma.status.createMany({
    data: [
      { status: 'Active' },
      { status: 'Draft' },
      { status: 'Archived' },
    ],
    skipDuplicates: true,
  })

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })