import { DecodedJWTToken } from '@models/base/DecodedJWTToken';

export enum AUTHENTICATION_TYPES {
  AUTHENTICATION_ASYNC_REQUEST = 'AUTHENTICATION_ASYNC_REQUEST',
  AUTHENTICATION_ASYNC_SUCCESS = 'AUTHENTICATION_ASYNC_SUCCESS',
  AUTHENTICATION_ASYNC_FAILURE = 'AUTHENTICATION_ASYNC_FAILURE',
}

export type AuthenticationState = {
  authenticationError: string | null;
  authenticationLoading: boolean;
  decodedJWTToken: DecodedJWTToken | null;
};
