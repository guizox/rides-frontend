import { State } from './interfaces';
import create from 'zustand'
import { persist, redux } from "zustand/middleware"
import reducer from './reducer'

export const initialState: State = {
  notifications: [],
  closed: [],
}

export const notificationsStore = create(persist(
  redux(reducer, initialState),
  {
    name: 'notifications-store'
  }
))