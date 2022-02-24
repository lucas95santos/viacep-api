import express, { Request, Response } from 'express';
import 'dotenv/config';

const PORT = process.env.API_PORT || 8080;

const app = express();

app.get('/', (request: Request, response: Response) => {
  return response.send('Hello world');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
