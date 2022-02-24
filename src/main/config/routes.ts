import { Router, Request, Response } from 'express';
// routes instance
const router = Router();

router.get('/', (request: Request, response: Response) => {
  return response.send('Hello world');
});

export { router as Routes };
