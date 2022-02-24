import { App } from './config/app';
import { Routes } from './config/routes';
import env from './config/env';

const httpServer = App.getInstance(Routes);

httpServer.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
