import { UserFromJwt } from '../../../models/base/UserFromJwt';

export enum USER_TYPES {
  UPDATE_USER = 'UPDATE_USER',
}

export type UserState = {
  user: UserFromJwt | null;
};
