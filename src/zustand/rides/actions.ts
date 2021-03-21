import { unstable_batchedUpdates } from 'react-dom';
import { Types } from './types';
import apis, { TOKEN_TYPE } from '../../apis';
import { authStore } from '../auth-store';
import { ridesStore } from '.';
import moment from 'moment';

const actions = (dispatch: any) => ({
  getAll: () => unstable_batchedUpdates(async () => {

    dispatch({ type: Types.RIDES_GET_ALL_REQUEST });

    const { data: { accessToken } } = authStore.getState();

    const { filters } = ridesStore.getState();

    const { startDate, endDate, ...rest } = filters;

    try {
      const response = await apis({ baseURL: process.env.REACT_APP_URL || 'http://localhost:3001' }).post({
        url: '/ride/findAll',
        headers: {
          Authorization: `${TOKEN_TYPE} ${accessToken}`
        },
        data: {
          ...rest,
          startDate: moment(startDate).format('YYYY-MM-DDT00:00:00.000Z'),
          endDate: moment(endDate).format('YYYY-MM-DDT23:59:00.000Z')
        }
      })

      dispatch({ type: Types.RIDES_GET_ALL_FULFILLED, payload: response?.data });

    } catch (e) {
      dispatch({ type: Types.RIDES_GET_ALL_REJECTED });
    }
  }),
  changeRidesFields: (payload: { key: string, value: any }) => {
    dispatch({ type: Types.RIDER_CHANGE_ADD_RIDES_FIELDS, payload });
  },
  changeRidesFilterFields: (payload: { key: string, value: any }) => {
    dispatch({ type: Types.RIDES_CHANGE_FILTER_FIELDS, payload });
  },

  addRide: () => unstable_batchedUpdates(async () => {

    dispatch({ type: Types.RIDES_ADD_REQUEST });

    const { data: { accessToken } } = authStore.getState();

    const { fields } = ridesStore.getState();


    try {
      const response = await apis({ baseURL: process.env.REACT_APP_URL || 'http://localhost:3001' }).post({
        url: '/ride',
        headers: {
          Authorization: `${TOKEN_TYPE} ${accessToken}`
        },
        data: fields
      })

      dispatch({ type: Types.RIDES_ADD_FULFILLED, payload: response?.data });

    } catch (e) {
      dispatch({ type: Types.RIDES_ADD_REJECTED });
    }
  }),

  getAllCategories: () => unstable_batchedUpdates(async () => {

    const { data: { accessToken } } = authStore.getState();


    const response = await apis({ baseURL: process.env.REACT_APP_URL || 'http://localhost:3001' }).get({
      url: '/ride/categories',
      headers: {
        Authorization: `${TOKEN_TYPE} ${accessToken}`
      },
    })

    dispatch({ type: Types.RIDES_GET_ALL_CATEGORIES_FULFILLED, payload: response?.data })
  }),
  handleDialog: (payload: boolean) => dispatch({ type: Types.RIDES_HANDLE_DIALOG, payload })
})

export default actions;