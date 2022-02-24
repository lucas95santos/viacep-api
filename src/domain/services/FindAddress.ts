import { getRepository, Repository } from 'typeorm';
// entities
import { Address } from '../entities/Address';

export class FindAddressService {
  private readonly addressRepository: Repository<Address>;

  constructor() {
    this.addressRepository = getRepository(Address);
  }

  public async execute(code: string): Promise<Address | undefined> {
    const foundAddress = await this.addressRepository.findOne({
      where: { cep: code },
    });

    return foundAddress;
  }
}
