const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // 新規ユーザーの作成
  const newUser = await prisma.user.create({
    data: {
      name: 'Taro',
      email: 'taro@example.com',
    },
  });
  console.log('Created new user:', newUser);

  // 全ユーザーの取得
  const allUsers = await prisma.user.findMany();
  console.log('All users:', allUsers);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
