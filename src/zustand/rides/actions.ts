import { unstable_batchedUpdates } from 'react-dom';
import { Types } from './types';
import apis, { TOKEN_TYPE } from '../../apis';
import { authStore } from '../auth-store';

const actions = (dispatch: any) => ({
  getAll: () => unstable_batchedUpdates(async () => {

    dispatch({ type: Types.RIDES_GET_ALL_REQUEST });

    const { data: { accessToken } } = authStore.getState();


    try {
      const response = await apis({ baseURL: 'http://localhost:3001' }).get({
        url: '/ride',
        headers: {
          Authorization: `${TOKEN_TYPE} ${accessToken}`
        }
      })

      dispatch({ type: Types.RIDES_GET_ALL_FULFILLED, payload: response?.data });

    } catch (e) {
      dispatch({ type: Types.RIDES_GET_ALL_REJECTED });
    }
  })
})

export default actions;