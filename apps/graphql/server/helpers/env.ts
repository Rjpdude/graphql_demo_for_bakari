import { compose, prop, __, curryN } from "ramda";
import * as path from 'path';

const enval = compose(prop(__, process.env));
const curDir = curryN(2, path.join)(__dirname);

export const dir = enval('NX_NEXT_DIR') || curDir('..');
export const dev = enval('NODE_ENV') === 'development';
export const port = parseInt(enval('WEB_PORT'));
export const host = enval('WEB_HOST');
