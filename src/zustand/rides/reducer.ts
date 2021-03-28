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

    case Types.RIDER_CHANGE_ADD_RIDES_FIELDS:

      return {
        ...state,
        fields: {
          ...state.fields,
          [payload.key]: payload.value
        }
      }

    case Types.RIDES_CHANGE_FILTER_FIELDS:

      return {
        ...state,
        filters: {
          ...state.filters,
          [payload.key]: payload.value
        }
      }

    case Types.RIDES_ADD_REQUEST:
      return {
        ...state,
        isCreating: true,
      }
    case Types.RIDES_ADD_FULFILLED:
      const addNewCategory = state.allCategories.find((item: any) => item.category !== payload.category);
      return {
        ...state,
        isCreating: false,
        allCategories: addNewCategory ? [...state.allCategories, payload.category] : state.allCategories,
        openDialog: !state.openDialog,
        data: [...state.data, payload],
      }
    case Types.RIDES_ADD_REJECTED:
      return {
        ...state,
        isCreating: false,
      }

    case Types.RIDES_GET_ALL_CATEGORIES_FULFILLED:
      return {
        ...state,
        allCategories: payload
      }

    case Types.RIDES_HANDLE_DIALOG:
      return {
        ...state,
        openDialog: payload,
        fields: payload ? {
          ...state.fields,
          description: '',
          amount: '',
          category: '',
          createdAt: ''
        } : state.fields
      }
    case Types.RIDES_DUPLICATE:
      return {
        ...state,
        openDialog: true,
        fields: payload
      }
    case Types.RIDES_EXCLUDE_HANDLE_DIALOG:
      return {
        ...state,
        excludeId: payload
      }

      case Types.RIDES_REMOVE_REQUEST:
        return {
          ...state,
          isExcluding: true,
        }
      case Types.RIDES_REMOVE_FULFILLED:
        return {
          ...state,
          isExcluding: false,
          excludeId: null,
        }
      case Types.RIDES_REMOVE_REJECTED:
        return {
          ...state,
          isExcluding: false,
          excludeId: null,
        }
  }
}

export default reducer;