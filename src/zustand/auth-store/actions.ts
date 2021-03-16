import { Types } from './types';
import { unstable_batchedUpdates } from 'react-dom' // or 'react-native'
import notificationsActions from '../notifications/actions';
import { authStore } from '.';
import apis from '../../apis';
import { notificationsStore } from '../notifications';

const actions = (dispatch: any) => ({

  changeFields: (payload: { key: 'email' | 'password', value: string }) => {
    dispatch({ type: Types.AUTH_CHANGE_FIELDS, payload })
  },
  changeRegisterFields: (payload: { key: 'email' | 'password', value: string }) => {
    dispatch({ type: Types.AUTH_CHANGE_FIELDS, payload })
  },
  login: () => {
    unstable_batchedUpdates(async () => {
      const { fields } = authStore.getState();
      const notifications = notificationsStore.getState();

      const { notificationsShow } = notificationsActions(notifications.dispatch);

      dispatch({ type: Types.AUTH_LOGIN_REQUEST });

      try {
        const response = await apis({ baseURL: 'http://localhost:3001' }).post({
          url: '/auth/sign-in',
          data: fields
        })

        await dispatch({ type: Types.AUTH_LOGIN_FULFILLED, payload: response?.data });


      } catch (e) {
        dispatch(notificationsShow({ status: 'error', message: 'Usuário ou senha inválidos.' }));
        dispatch({ type: Types.AUTH_LOGIN_REJECTED });
      }
    })
  },

  register: () => {
    unstable_batchedUpdates(async () => {

      const { fields } = authStore.getState();
      const notifications = notificationsStore.getState();

      const { notificationsShow } = notificationsActions(notifications.dispatch);

      dispatch({ type: Types.AUTH_REGISTER_REQUEST });

      try {
        await apis({ baseURL: 'http://localhost:3001' }).post({
          url: '/auth/signup',
          data: fields
        })

        dispatch({ type: Types.AUTH_REGISTER_FULFILLED });

        dispatch(notificationsShow({ status: 'success', message: 'Registro criado com sucesso.' }));
      } catch (e) {
        dispatch(notificationsShow({ status: 'error', message: 'Erro ao crir o registro.' }));
        dispatch({ type: Types.AUTH_REGISTER_REJECTED });
      }
    })
  },
  logout: () => {
    dispatch({ type: Types.AUTH_LOGOUT });
  }
})

export default actions;