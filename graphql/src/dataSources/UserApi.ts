import { RESTDataSource, AugmentedRequest } from '@apollo/datasource-rest';

class UserApi extends RESTDataSource {
  override baseURL = 'http://localhost:5000';
  private token: string;

  constructor(options: { token: string }) {
    super();
    this.token = options.token;
  }

  override willSendRequest(_path: string, request: AugmentedRequest) {
    request.headers['authorization'] = this.token;
  }

  async getCurrentUser(): Promise<API.IUser> {
    return this.get<API.IUser>('/user/me');
  }

  async getUserById(id: string): Promise<API.IUser> {
    return this.get<API.IUser>(`/user/${id}`);
  }
}

export default UserApi;
