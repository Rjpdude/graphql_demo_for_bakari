import { createServer } from 'http';
import { parse } from 'url';
import * as path from 'path';
import next from 'next';

const dir = process.env.NX_NEXT_DIR || path.join(__dirname, '..');
const dev = process.env.NODE_ENV === 'development';
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT ? parseInt(process.env.PORT) : 4200;

async function main() {
  const nextApp = next({ dev, dir });
  const handle = nextApp.getRequestHandler();

  await nextApp.prepare();

  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  server.listen(port, hostname);

  console.log(`[ ready ] on http://${hostname}:${port}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});