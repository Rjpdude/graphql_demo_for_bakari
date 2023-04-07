import "reflect-metadata";

import { apollo } from './apollo';
import { createServer } from 'http';
import { parse } from 'url';
import { map } from "ramda";
import * as path from 'path';
import next from 'next';

const dir = process.env.NX_NEXT_DIR || path.join(__dirname, '..');
const dev = process.env.NODE_ENV === 'development';
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT ? parseInt(process.env.PORT) : 4200;

async function main(...chain: string[]) {
  const nextApp = next({ dev, dir});
  const handle = nextApp.getRequestHandler();

  await nextApp.prepare();

  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  server.listen(port, hostname);

  return chain.concat(`🌍 Web Server ready at http://${hostname}:${port}`)
}

function shutdown(error: any) {
  console.log('[ERROR] Shutting down...', error);
  process.exit(0);
}

apollo().then(main)
  .then(map(console.log))
  .catch(shutdown);
