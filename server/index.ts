import express from "express";
import { resolve } from "node:path";

const app = express();
const port = Number.parseInt(process.env.PORT ?? "3000", 10);
const distDirectory = resolve(process.cwd(), "dist");

app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use((_request, response, next) => {
  response.set({
    "Content-Security-Policy": "default-src 'self'; base-uri 'self'; form-action 'self' https://formsubmit.co; frame-ancestors 'none'; img-src 'self' data:; object-src 'none'; script-src 'self'; style-src 'self'",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Content-Type-Options": "nosniff",
  });
  next();
});

app.get("/health", (_request, response) => {
  response.status(200).json({ status: "ok" });
});

app.use(express.static(distDirectory, { index: false, maxAge: "1h" }));
app.use((request, response, next) => {
  if (request.method !== "GET") {
    next();
    return;
  }
  response.sendFile(resolve(distDirectory, "index.html"));
});

const server = app.listen(port, "0.0.0.0", () => {
  console.log(`Lacey Hull campaign site listening on port ${port}.`);
});

function shutdown(): void {
  server.close(() => process.exit(0));
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
