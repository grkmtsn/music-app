/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';

import Logger from './loaders/logger.js';

async function startServer() {
  const app = express();

  const loaders = await import('./loaders/index.js');
  loaders.default({ expressApp: app });

  app
    .listen(process.env.PORT, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${process.env.PORT} 🛡️
      ################################################
    `);
    })
    .on('error', (err) => {
      Logger.error(err);
      process.exit(1);
    });
}

await startServer();
