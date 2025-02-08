"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
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
    console.log('All users:', allUsers);
}
main()
    .catch(e => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
});
