// supertest
import request from 'supertest';
// database
import { createConnections, getConnection } from 'typeorm';
// app
import { App } from '../src/main/config/app';
// routes
import { Routes } from '../src/main/config/routes';

describe('Pesquisa pelo CEP', () => {
  beforeAll(async () => {
    await createConnections();
  });

  afterAll(async () => {
    const defaultConnection = getConnection('default');
    await defaultConnection.close();
  });

  const httpServer = App.getInstance(Routes);

  it('deve retornar o statusCode 404 se não passar o CEP', async () => {
    const response = await request(httpServer).get('/search');
    expect(response.status).toBe(404);
  });

  it('deve retornar o statusCode 400 se o CEP não for encontrado', async () => {
    const response = await request(httpServer).get('/search/79080199');
    expect(response.status).toBe(400);
  });

  it('deve retornar o statusCode 200 se o CEP for encontrado', async () => {
    const response = await request(httpServer).get('/search/79080190');
    expect(response.status).toBe(200);
  });
});
