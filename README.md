# Lacey Hull campaign website

A standalone campaign site built with Vite, React, TypeScript, and a small static Express server.

The project uses public content and campaign photography from [laceyhull.com](https://www.laceyhull.com/) with a bold editorial direction inspired by [jonbonck.com](https://www.jonbonck.com/). All images are stored locally in `public/images`, and the interface contains no animation.

Volunteer form submissions are sent directly to `campaign@laceyhull.com` through FormSubmit. The form uses a standard HTML POST with FormSubmit's CAPTCHA and honeypot protection; it does not use client-side request code.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Production build

```bash
npm run build
npm start
```

Open `http://localhost:3000`. The server uses the platform-provided `PORT` value when one is present.

## Railway

1. Push this directory to its own GitHub repository.
2. In Railway, create a project and deploy that GitHub repository. The included `Dockerfile` is detected automatically.
3. Set the healthcheck path to `/health`, then generate a public domain under Networking.
4. Submit the live form once and use the activation link that FormSubmit emails to `campaign@laceyhull.com`.

No database or Railway environment variables are required.
