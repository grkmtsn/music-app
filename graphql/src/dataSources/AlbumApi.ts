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

  async getAlbums(): Promise<API.IAlbum[]> {
    return this.get<API.IAlbum[]>('/album');
  }
}

export default UserApi;
