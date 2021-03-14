import { Types } from './types';

const actions = (dispatch: any) => ({

  notificationsShow: (payload: any) => dispatch({ type: Types.NOTIFICATION_SHOW, payload }),
  notificationsHide: (payload: any) => {
    dispatch({ type: Types.NOTIFICATION_CLOSE, payload })
  },
})

export default actions;