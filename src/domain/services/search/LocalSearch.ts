// entities
import { Address } from '../../entities/Address';
// services
import { FindAddressService } from '../address';

export class LocalSearchService {
  public async execute(code: string): Promise<Address | undefined> {
    const findAddress = new FindAddressService();
    const codeToSearch = `${code.substring(0, 5)}-${code.substring(5, 8)}`;

    const foundAddress = await findAddress.execute(codeToSearch);

    return foundAddress;
  }
}
