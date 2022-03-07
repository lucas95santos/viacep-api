import axios from 'axios';
// entities
import { Address } from '../../entities/Address';
// services
import { CreateAddressService } from '../address';

export class RemoteSearchService {
  public async execute(code: string): Promise<Address | undefined> {
    let viaCepResponse = null;

    try {
      viaCepResponse = await axios.get(`https://viacep.com.br/ws/${code}/json`);
    } catch (error) {
      throw new Error('CEP não encontrado');
    }

    if (!viaCepResponse.data) {
      throw new Error('CEP não encontrado');
    }

    const address = viaCepResponse.data;

    // salvando o CEP pesquisado na base de dados
    const createAddress = new CreateAddressService();
    const addressCreated = await createAddress.execute(address);

    if (!addressCreated) {
      throw new Error('Não foi possível salvar o endereço');
    }

    return address;
  }
}
