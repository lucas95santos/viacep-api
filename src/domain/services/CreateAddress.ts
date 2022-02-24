import { getRepository, Repository } from 'typeorm';
// entities
import { Address } from '../entities/Address';

export interface IAddressPayload {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export class CreateAddressService {
  private readonly addressRepository: Repository<Address>;

  constructor() {
    this.addressRepository = getRepository(Address);
  }

  public async execute(address: IAddressPayload): Promise<Boolean> {
    const hasEmptyProperty = this.checkEmptyProperty(Object.values(address));

    if (hasEmptyProperty)
      throw new Error('Informe todos os campos do endereço');

    const addressAlreadyExists = await this.addressRepository.findOne({
      where: { cep: address.cep },
    });

    if (addressAlreadyExists) {
      throw new Error('O endereço já foi cadastrado');
    }

    const newAddress = this.addressRepository.create(address);
    const saveAddressResponse = await this.addressRepository.save(newAddress);

    return !!saveAddressResponse;
  }

  private checkEmptyProperty(properties: Array<string>) {
    const isEmpty = (value: string | undefined | null) =>
      typeof value === 'undefined' || value === null;

    return properties.some((prop) => isEmpty(prop));
  }
}
