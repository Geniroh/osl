import { api, setAuthorizationToken } from '../api/api';
import { resources } from '../api/resources';
import { AUTH_TOKEN_KEY } from '../constants';

export class AuthService {
  static async authenticate(email, password) {
    const { data } = await api.post(resources.loginUrl, { email, password });
    localStorage.setItem(AUTH_TOKEN_KEY, data.token);
    setAuthorizationToken(data.token);
    return data.user;
  }

  static async getAuthenticatedUser() {
    try{
        const { data } = await api.get(resources.profileUrl);
        return data;
    } catch(error) {
        console.log(error)
        return null
    }
  }
}
