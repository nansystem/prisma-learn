import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  // Create a new user
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: 'tada',
  //     email: 'tada@example.com',
  //   },
  // });
  // console.log('Created new user:', newUser);

  // Retrieve all users
  const allUsers = await prisma.user.findMany();
  allUsers.forEach(user => {
    console.log('All users:', user.name);
  })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });