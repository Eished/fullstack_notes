# Awesome Links - part-1

This branch has the same starting point as [this article](https://prisma.io/blog/fullstack-nextjs-graphql-prisma-oklidw1rhw)

`npx ngrok http 3000`

```json
// import { PrismaClient } from '@prisma/client'; SyntaxError: Cannot use import statement outside a module
// tsconfig
{
  "compilerOptions": {
    "target": "es5",
    "module": "CommonJS",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", "prisma/*.ts"],
  "exclude": ["node_modules"]
}
```
