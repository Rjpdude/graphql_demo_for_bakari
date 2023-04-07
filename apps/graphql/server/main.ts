import "reflect-metadata";

import next from 'next';
import { apollo } from './apollo';
import { createServer } from 'http';
import { parse } from 'url';
import { map } from "ramda";
import { dev, dir, port, host } from "./helpers/env";

async function main(...chain: string[]) {
  if (!dev) {
    return chain;
  }
  const nextApp = next({ dev, dir });
  const handle = nextApp.getRequestHandler();

  await nextApp.prepare();

  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  server.listen(port, host);

  return chain.concat(`🌍 Web Server ready at http://${host}:${port}`)
}

function shutdown(error: unknown) {
  console.log('[ERROR] Shutting down...', error);
  process.exit(0);
}

apollo()
  .then(main)
  .then(map(console.log))
  .catch(shutdown);
