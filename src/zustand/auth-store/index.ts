import { State } from './interfaces';
import create from 'zustand'
import { persist, redux } from "zustand/middleware"
import reducer from './reducer'

export const initialState: State = {
  fields: {
    email: '',
    password: '',
  },
  registerFields: {
    email: '',
    password: ''
  },
  isLoading: false,
  isCreating: false,
  data: null
}

export const authStore = create(persist(
  redux(reducer, initialState),
  {
    name: 'auth-store'
  }
))