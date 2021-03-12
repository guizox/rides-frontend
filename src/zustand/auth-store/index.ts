import { State } from './interfaces';
import create from 'zustand'
import { persist, redux } from "zustand/middleware"
import reducer from './reducer'

export const initialState: State = {
  fields: {
    email: '',
    password: '',
  },
  isLoading: false,
  data: null
}

export const authStore = create(persist(
  redux(reducer, initialState),
  {
    name: 'auth-store'
  }
))