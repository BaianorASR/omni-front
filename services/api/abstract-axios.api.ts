import axios, { AxiosInstance } from 'axios';

export abstract class AbstractApi {
  private api: AxiosInstance;
  public constructor(endpoint: string) {
    this.api = axios.create({
      baseURL: endpoint,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  protected post(url: string, data: any) {
    return this.api.post(url, data);
  }
  protected get<T>(url: string) {
    return this.api.get<T>(url);
  }
  protected put(url: string, data: any) {
    return this.api.put(url, data);
  }
  protected delete(url: string) {
    return this.api.delete(url);
  }
  protected patch(url: string) {
    return this.api.patch(url);
  }
}
