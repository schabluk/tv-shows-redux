import {
  configureStore,
  getDefaultMiddleware,
  Middleware as ToolkitMiddleware,
} from '@reduxjs/toolkit'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'

import sagas from './sagas'
import { shows, title } from './slices'
export { default as actions } from './actions'

type Middlewares = ToolkitMiddleware | SagaMiddleware

const sagaMiddleware = createSagaMiddleware()

const middleware: Middlewares[] = [
  ...getDefaultMiddleware({
    thunk: true,
    serializableCheck: false,
  }),
  sagaMiddleware,
]

const stateTree = {
  reducer: {
    shows: shows.reducer,
    title: title.reducer,
  },
  middleware,
}

// Use IIFE to initialize store with Saga.
export const store = (() => {
  const instance = configureStore(stateTree)

  // Saga middleware has to be started before the store instance is returned.
  sagaMiddleware.run(sagas)

  return instance
})()
