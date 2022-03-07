import { Request, Response } from 'express';
// entities
import { Address } from '../../domain/entities/Address';
// services
import { LocalSearchService, RemoteSearchService } from '../../domain/services';

export class AddressController {
  public static async search(
    request: Request,
    response: Response,
  ): Promise<Response<Address | null>> {
    const { code } = request.params;
    let address = null;

    try {
      if (!code) {
        return response.status(400).json({
          error: 'CEP não informado',
        });
      }

      const postalCode = code.replace('-', '').trim();

      const localSearch = new LocalSearchService();
      address = await localSearch.execute(postalCode);

      if (!address) {
        const remoteSearch = new RemoteSearchService();
        address = await remoteSearch.execute(postalCode);
      }

      if (!address) {
        return response.status(400).json({
          error: 'CEP não encontrado',
        });
      }

      return response.status(200).json(address);
    } catch (error: any) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }
}
