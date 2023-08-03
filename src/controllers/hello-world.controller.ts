import { RequestHandler } from 'express';

export const sayHelloWorld: RequestHandler = (req, res) => {
  res.send('Hello world!');
};