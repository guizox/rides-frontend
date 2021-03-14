import { State } from './interfaces';
import create from 'zustand'
import { persist, redux } from "zustand/middleware"
import reducer from './reducer'

export const initialState: State = {
  isLoading: false,
  data: []
}

export const ridesStore = create(persist(
  redux(reducer, initialState),
  {
    name: 'rides-store'
  }
))