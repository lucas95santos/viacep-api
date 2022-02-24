// database
import { createConnections, getConnection } from 'typeorm';
// services
import {
  FindAddressService,
  CreateAddressService,
  IAddressPayload,
} from '../src/domain/services';

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

  it('deve retornar true se o CEP for salvo na base de dados', async () => {
    const address: IAddressPayload = {
      cep: '79080-191',
      logradouro: 'Avenida Senador Filinto Muller',
      complemento: 'até 930/931',
      bairro: 'Vila Ipiranga',
      localidade: 'Campo Grande',
      uf: 'MS',
      ibge: '5002704',
      gia: '',
      ddd: '67',
      siafi: '9051',
    };

    const createAddressService = new CreateAddressService();
    const addressCreated = await createAddressService.execute(address);

    expect(addressCreated).toBeTruthy();
  });
});
