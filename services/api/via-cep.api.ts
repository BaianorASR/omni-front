import { AbstractApi } from '@app/services/api';
import type { TGetCepResponse } from '@app/services/api/types';

class ViaCepApi extends AbstractApi {
  private static instance: ViaCepApi;

  constructor() {
    super('https://viacep.com.br/ws/');
  }

  public async getCep(cep: string) {
    return this.get<TGetCepResponse>(`/${cep}/json/`);
  }

  static getInstance() {
    if (!this.instance) this.instance = new ViaCepApi();
    return this.instance;
  }
}

export default ViaCepApi.getInstance();
