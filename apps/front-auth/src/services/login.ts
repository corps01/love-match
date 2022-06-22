import { AuthDAO, LoginDTO } from '@love-match/definitions';
import { authInstance } from './axios';

export const LoginService = async (loginDTO: LoginDTO): Promise<AuthDAO> => {
  const { data } = await authInstance.post<AuthDAO>('/auth/login', loginDTO);

  return data;
};
