import { apiProvider } from './provider';

interface ApiOptions<Model> {
  url: string;
  getAll?: boolean;
  getSingle?: boolean;
  post?: boolean;
  put?: boolean;
  patch?: boolean;
  delete?: boolean;
}

export class ApiCore<Model> {
  constructor(private options: ApiOptions<Model>) {}

  getAll(): Promise<Model[]> {
    if (this.options.getAll) {
      return apiProvider.getAll(this.options.url);
    }
    throw new Error('Method not allowed');
  }

  getSingle(id: string): Promise<Model> {
    if (this.options.getSingle) {
      return apiProvider.getSingle(this.options.url, id);
    }
    throw new Error('Method not allowed');
  }

  post(model: Model): Promise<Model> {
    if (this.options.post) {
      return apiProvider.post(this.options.url, model);
    }
    throw new Error('Method not allowed');
  }

  put(model: Model): Promise<Model> {
    if (this.options.put) {
      return apiProvider.put(this.options.url, model);
    }
    throw new Error('Method not allowed');
  }

  patch(model: Model): Promise<Model> {
    if (this.options.patch) {
      return apiProvider.patch(this.options.url, model);
    }
    throw new Error('Method not allowed');
  }

  delete(id: string): Promise<void> {
    if (this.options.delete) {
      return apiProvider.remove(this.options.url, id);
    }
    throw new Error('Method not allowed');
  }
}
