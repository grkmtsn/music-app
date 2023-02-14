import { RESTDataSource, AugmentedRequest } from '@apollo/datasource-rest';

class API extends RESTDataSource {
  override baseURL = 'http://localhost:5000';
  private token: string;

  constructor(options: { token: string }) {
    super();
    this.token = options.token;
  }

  override willSendRequest(_path: string, request: AugmentedRequest) {
    request.headers['authorization'] = this.token;
  }

  async login(body: API.ILoginBody): Promise<API.IAuth> {
    return this.post<API.IAuth>('/auth/login', { body });
  }

  async register(body: API.IRegisterBody): Promise<API.IAuth> {
    return this.post<API.IAuth>('/auth/register', { body });
  }
}

export default API;
