This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Prisma commands
```bash
npx prisma generate #generate prisma file

or

npx prisma migrate dev #generate migrations and creates in database

or

To create new fields in tables or new tables edit schema.prisma file
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Stripe Instructions
```
- Create account and choose 'No recurring payments' options
- search for api keys in your stripe account and paste in .env file NEXT_PUBLIC_STRIPE_PUBLIC_KEY STRIPE_SECRET_KEY
- search for 'connect' in stripe and configure as 'Marketplace' 
- configure webhook - search for webhooks in your stripe account for local tests choose local option and install stripe cli.
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## App Routes
```
http://localhost:3000/ - home page
http://localhost:3000/dashboard - logged area - user dashboard with wallet info
http://localhost:3000/dashboard/me - logged area - slug configuration 
http://localhost:3000/creator/[slug] -> ex: http://localhost:3000/creator/luizimcpi
```
## TODO
```
- Login with google
- Change home page with rent project info
- Change page names (remove Create next app)
- Add button in home page to see available courts (list)
```

[youtube](https://www.youtube.com/watch?v=FLMZe90y80c&t=1521s 23:10)
