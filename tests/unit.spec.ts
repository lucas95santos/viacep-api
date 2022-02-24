// database
import { createConnections, getConnection } from 'typeorm';
// services
import {
  FindAddressService,
  CreateAddressService,
  RemoveAddressService,
  IAddressPayload,
} from '../src/domain/services';

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

describe('CEP na base de dados', () => {
  beforeAll(async () => {
    await createConnections();
  });

  afterAll(async () => {
    const defaultConnection = getConnection('default');
    await defaultConnection.close();
  });

  it('deve retornar undefined se o CEP não existir na base de dados', async () => {
    // buscando um endereço na base de dados
    const findAddressService = new FindAddressService();
    const foundAddress = await findAddressService.execute('79080-199');

    expect(foundAddress).toBeUndefined();
  });

  it('deve retornar true se o CEP for salvo na base de dados', async () => {
    // criando salvando um novo endereço na base de dados
    const createAddressService = new CreateAddressService();
    const addressCreated = await createAddressService.execute(address);

    // removendo um endereço da base de dados
    const removeAddressService = new RemoveAddressService();
    await removeAddressService.execute('79080-191');

    expect(addressCreated).toBeTruthy();
  });

  it('deve retornar os dados do endereço se o CEP existir na base de dados', async () => {
    // criando salvando um novo endereço na base de dados
    const createAddressService = new CreateAddressService();
    await createAddressService.execute(address);

    // buscando um endereço na base de dados
    const findAddressService = new FindAddressService();
    const foundAddress = await findAddressService.execute('79080-191');

    // removendo um endereço da base de dados
    const removeAddressService = new RemoveAddressService();
    await removeAddressService.execute('79080-191');

    expect(foundAddress).toBeDefined();
    expect(foundAddress).toHaveProperty('cep');
  });
});
