import { createAction } from '@reduxjs/toolkit'

import { ActionTypes } from './types'
import { shows, title } from './slices'
import * as thunk from './thunks'

export default {
  shows: {
    ...shows.actions,
    showsGet: createAction<string>(ActionTypes.SHOWS_GET),
  },
  title: {
    ...title.actions,
    ...thunk,
    // titleGet: createAction(ActionTypes.TITLE_GET)
  },
}
