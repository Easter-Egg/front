export const AUTH = 'AUTH';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const auth = (email, password) => {
  return {
    type: AUTH,
    promise: {
      method: 'post',
      url: 'http://13.124.16.155:3000/v1/login/',
      data: { email, password }
    }
  }
}