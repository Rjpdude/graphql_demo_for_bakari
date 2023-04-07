import "reflect-metadata";

import { apollo } from './apollo';
import { createServer } from 'http';
import { parse } from 'url';
import { __, compose, curryN, map, prop } from "ramda";
import * as path from 'path';
import next from 'next';

const enval = compose(prop(__, process.env));
const curDir = curryN(2, path.join)(__dirname);

/**
 * Environment Variables (get em while they're hot)
 */
const dir = enval('NX_NEXT_DIR') || curDir('..');
const dev = enval('NODE_ENV') === 'development';
const port = parseInt(enval('WEB_PORT'));
const host = enval('HOST');

async function main(...chain: string[]) {
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

apollo().then(main)
  .then(map(console.log))
  .catch(shutdown);
