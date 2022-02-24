import { Request, Response } from 'express';
import axios from 'axios';
// entities
import { Address } from '../../domain/entities/Address';
// services
import {
  CreateAddressService,
  FindAddressService,
} from '../../domain/services';

// TODO: implementar helpers para os http codes
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
          error: 'Código postal não informado',
        });
      }

      const postalCode = code.replace('-', '').trim();

      // pesquisar CEP no banco
      const findAddressService = new FindAddressService();
      const codeToSearch = `${postalCode.substring(
        0,
        5,
      )}-${postalCode.substring(5, 8)}`;

      const foundAddress = await findAddressService.execute(codeToSearch);

      if (foundAddress) {
        address = foundAddress;
      } else {
        // se o endereço não existe
        const viaCepResponse = await axios.get(
          `https://viacep.com.br/ws/${postalCode}/json`,
        );

        if (!viaCepResponse.data) {
          return response.status(400).json({
            error: 'Código postal não encontrado',
          });
        }

        address = viaCepResponse.data;

        // salvando o CEP pesquisado na base de dados
        const createAddressService = new CreateAddressService();
        const addressCreated = await createAddressService.execute(address);

        if (!addressCreated) {
          return response.status(400).json({
            error: 'Não foi possível salvar o endereço',
          });
        }
      }

      return response.status(200).json(address);
    } catch (error: any) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }
}
