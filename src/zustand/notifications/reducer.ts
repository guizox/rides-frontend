import { Types } from './types';

const reducer = (state: any, { type, payload }: any) => {

  console.log({ type, payload, state })
  switch (type) {
    case Types.NOTIFICATION_SHOW:
      return {
        ...state,
        notifications: [...state.notifications, { ...payload, id: state.closed.length + 1 }]
      }
    case Types.NOTIFICATION_CLOSE:
      return {
        ...state,
        notifications: state.notifications.filter((item: any) => item.id !== payload),
        closed: [...state.closed, payload],
      }
  }
}

export default reducer;