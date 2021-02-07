import { store } from './store'

export type ApplicationStore = ReturnType<typeof store.getState>

export type ApplicationDispatch = typeof store.dispatch
