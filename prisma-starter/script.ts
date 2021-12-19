import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here

  // const allUsers = await prisma.user.findMany({
  //   include: { posts: true },
  // });
  // // use `console.dir` to print nested objects
  // console.dir(allUsers, { depth: null });

  // const users = await prisma.user.findMany({
  //   // 返回指定字段
  //   select: {
  //     name: true,
  //     posts: {
  //       select: {
  //         title: true,
  //       },
  //     },
  //   },
  // });

  // const users = await prisma.user.findMany({
  //   // 返回所有用户字段
  //   include: {
  //     posts: {
  //       select: {
  //         title: true,
  //       },
  //     },
  //   },
  // });

  // const users = await prisma.user.groupBy({
  //   by: ['name', 'email', 'id'],
  // });

  const users = await prisma.user.findUnique({
    where: {
      id: 2,
    },
    select: {
      name: true,
    },
  });

  const getUser: object | null = await prisma.user.findUnique({
    where: {
      id: 22,
    },
    select: {
      email: true,
      name: true,
    },
  });
  console.dir(users, { depth: null });

  const result = await prisma.user.findMany({
    where: {
      posts: {
        every: {
          published: true,
        },
        some: {
          content: {
            contains: 'Prisma',
          },
        },
      },
    },
  });
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
