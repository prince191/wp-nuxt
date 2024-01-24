// serverMiddleware/fetch.js
import fetch from 'node-fetch';

export default async function (req, res, next) {
  global.fetch = fetch;
  next();
}
