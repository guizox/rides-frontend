import { State } from './interfaces';
import create from 'zustand'
import { persist, redux } from "zustand/middleware"
import reducer from './reducer'
import moment from 'moment';

export const initialState: State = {
  isLoading: false,
  data: [],
  isCreating: false,
  allCategories: [],
  fields: {
    description: '',
    amount: '',
    category: '',
    createdAt: moment().format('YYYY-MM-DD')
  },
  filters: {
    category: '',
    amount: '',
    description: '',
    endDate: moment().format('YYYY-MM-DD'),
    startDate: moment().format('YYYY-MM-DD'),
  },
  openDialog: false,
}

export const ridesStore = create(persist(
  redux(reducer, initialState),
  {
    name: 'rides-store'
  }
))