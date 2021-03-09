import { IBaseUserInfo } from './user.model';

export interface IConfigOptions extends IBaseUserInfo {
  login?: string;
  email: string;
  passwordHash: string
}
