import { createAsyncThunk } from '@reduxjs/toolkit'

import { ActionTypes, Title } from './types'
import { getTitle } from './api'

export const titleGet = createAsyncThunk<Title, number>(
  ActionTypes.TITLE_GET,
  async (id) => {
    return await getTitle(id)
  },
)
