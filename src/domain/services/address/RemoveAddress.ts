import { getRepository, Repository } from 'typeorm';
// entities
import { Address } from '../../entities/Address';

// serviço criada somente para usar nos testes unitários
export class RemoveAddressService {
  private readonly addressRepository: Repository<Address>;

  constructor() {
    this.addressRepository = getRepository(Address);
  }

  public async execute(code: string): Promise<boolean> {
    const foundAddress = await this.addressRepository.findOne({
      where: { cep: code },
    });

    if (!foundAddress) {
      throw new Error('O endereço não existe na base de dados');
    }

    const removeAddressResponse = await this.addressRepository.remove(
      foundAddress,
    );

    return !!removeAddressResponse;
  }
}
