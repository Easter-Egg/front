export const REGISTER = 'REGISTER';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const regiser = (email, password) => {
  return {
    type: REGISTER,
    promise: {
      method: 'post',
      url: 'http://13.124.16.155:3000/v1/register/',
      data: { email, password }
    }
  }
}