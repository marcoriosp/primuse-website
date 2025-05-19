# Primuse Website

This is a Next.js project for the Primuse website.

## Contact Form Setup

The contact form sends emails to australia@primuse.net using an SMTP server. To set it up:

1. Create a `.env.local` file in the project root with your SMTP configuration:

```
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_username
SMTP_PASSWORD=your_smtp_password
SMTP_SECURE=true_or_false
SMTP_FROM=your_from_email
```

Example configuration for Gmail:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your_gmail_account@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_SECURE=true
SMTP_FROM=your_gmail_account@gmail.com
```

Note: For Gmail, you'll need to use an App Password rather than your regular account password. See [Google's documentation](https://support.google.com/accounts/answer/185833) for details.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This is a Next.js project that can be deployed on platforms like Vercel, Netlify, or any other hosting service that supports Next.js.

```bash
npm run build
npm run start
```

For production deployment, make sure to set the environment variables for your SMTP configuration in your hosting platform.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
