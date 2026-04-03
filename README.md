# Wizdom Enterprizes Website

A Next.js website for Wizdom Enterprizes with support for product browsing, checkout, downloads, and an AI-powered help chat.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy the example environment file:

```bash
cp .env.example .env.local
```

3. Fill in the required secrets in `.env.local`.

4. Run locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` — start the app in development mode
- `npm run build` — create a production build
- `npm run start` — run the production server
- `npm run lint` — run ESLint checks

## Site pages

This site includes these main pages:

- `/` — home page
- `/focus-blueprint` — Focus Blueprint product details and buy links
- `/products` — product catalogue and downloads
- `/services` — services for coaching, setup, and custom support
- `/my-downloads` — access purchased downloads
- `/support` — contact and help information
- `/privacy` — privacy policy
- `/success` — post-purchase success confirmation

## Environment Variables

Required variables:

- `OPENAI_API_KEY` — OpenAI API key for `/api/chat`
- `SUPABASE_URL` — Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service role key for admin access
- `STRIPE_SECRET_KEY` — Stripe secret key used for checkout
- `STRIPE_WEBHOOK_SECRET` — Stripe webhook signing secret
- `NEXT_PUBLIC_SITE_URL` — public site origin used for checkout redirects

## Deployment

This project is ready for deployment on Vercel.

- Use the Vercel dashboard to connect the repository.
- Add the same environment variables to the Vercel project settings.
- Vercel automatically builds with `npm run build`.

## Notes

- `.env.example` is committed so you can share required keys without leaking secrets.
- `.env`, `.env.local`, and `.env.*.local` are ignored by Git.
- The `/api` routes are server-only and keep secrets on the backend.
- Local file logging in `data/` is used only during development; Vercel logs to the platform console.
