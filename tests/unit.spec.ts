// database
import { createConnections, getConnection } from 'typeorm';
// services
import { FindAddressService } from '../src/domain/services';

describe('CEP na base de dados', () => {
  beforeAll(async () => {
    await createConnections();
  });

  afterAll(async () => {
    const defaultConnection = getConnection('default');
    await defaultConnection.close();
  });

  it('deve retornar undefined se o CEP não existir na base de dados', async () => {
    const findAddressService = new FindAddressService();
    const foundAddress = await findAddressService.execute('79080-199');

    expect(foundAddress).toBeUndefined();
  });
});
