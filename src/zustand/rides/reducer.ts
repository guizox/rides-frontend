import { Types } from './types';

const reducer = (state: any, { type, payload }: any) => {

  switch (type) {
    case Types.RIDES_GET_ALL_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case Types.RIDES_GET_ALL_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: payload
      }
    case Types.RIDES_GET_ALL_REJECTED:
      return {
        ...state,
        isLoading: false,
      }
  }
}

export default reducer;