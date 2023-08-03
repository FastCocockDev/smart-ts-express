import express from 'express';

import helloWorldRouter from './hello-world.routes';

const rootRouter = express.Router();

rootRouter.use(helloWorldRouter);

export default rootRouter;