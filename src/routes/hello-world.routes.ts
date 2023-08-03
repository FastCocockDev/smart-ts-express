import express from 'express';
import * as helloWorldController from '../controllers/hello-world.controller';

const router = express.Router();

router.get(
  '/hello-world',
  /*
    #swagger.tags = ['Hello World']
    #swagger.description = 'Say hello world'
  */
  helloWorldController.sayHelloWorld
);

export default router;