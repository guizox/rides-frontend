import { Types } from './types';
import { unstable_batchedUpdates } from 'react-dom' // or 'react-native'
import { authStore } from '.';
import apis from '../../apis';

const actions = (dispatch: any) => ({

  changeFields: (payload: { key: 'email' | 'password', value: string }) => {
    dispatch({ type: Types.AUTH_CHANGE_FIELDS, payload })
  },
  login: () => {
    unstable_batchedUpdates(async () => {
      const { fields } = authStore.getState();

      dispatch({ type: Types.AUTH_LOGIN_REQUEST });

      try {
        const response = await apis({ baseURL: 'http://localhost:3001' }).post({
          url: '/auth/sign-in',
          data: fields
        })

        dispatch({ type: Types.AUTH_LOGIN_FULFILLED, payload: response?.data });

      } catch (e) {
        dispatch({ type: Types.AUTH_LOGIN_REJECTED });
      }
    })
  },
  logout: () => {
    dispatch({ type: Types.AUTH_LOGOUT });
  }
})

export default actions;