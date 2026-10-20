/* eslint-disable @typescript-eslint/no-require-imports */

const { createServer } = require("node:http");
const next = require("next");

const port = Number.parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, hostname: "0.0.0.0", port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((request, response) => handle(request, response)).listen(port, "0.0.0.0", () => {
    console.info(`Next.js server listening on port ${port}.`);
  });
});
