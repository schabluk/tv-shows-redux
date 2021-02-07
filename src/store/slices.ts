import { createSlice, PayloadAction as Payload } from '@reduxjs/toolkit'

import { ActionState, Slice, Title, Nullable } from './types'
import { titleGet } from './thunks'

export type ShowsSlice = Slice & { shows: any[] }

export const initialStateShows: ShowsSlice = {
  state: ActionState.IDLE,
  error: null,
  shows: [],
}

export const shows = createSlice({
  name: 'shows',
  initialState: initialStateShows,
  reducers: {
    default: (slice: ShowsSlice) => ({
      ...slice,
      state: ActionState.IDLE,
      error: null,
      shows: [],
    }),
    started: (slice: ShowsSlice) => ({
      ...slice,
      state: ActionState.PENDING,
    }),
    success: (slice: ShowsSlice, action: Payload<any>) => ({
      ...slice,
      state: ActionState.RESOLVED,
      error: null,
      shows: action.payload,
    }),
    failure: (slice: ShowsSlice, action: Payload<Error>) => ({
      ...slice,
      state: ActionState.REJECTED,
      error: action.payload,
    }),
  },
})

export type TitleSlice = Slice & { title: Nullable<any> }

export const initialStateTitle: TitleSlice = {
  state: ActionState.IDLE,
  error: null,
  title: null,
}

export const title = createSlice({
  name: 'title',
  initialState: initialStateTitle,
  reducers: {
    default: (slice: TitleSlice) => ({
      ...slice,
      state: ActionState.IDLE,
      error: null,
      title: null,
    }),
  },
  extraReducers: {
    [titleGet.pending.type]: (slice: TitleSlice) => ({
      ...slice,
      state: ActionState.PENDING,
    }),
    [titleGet.fulfilled.type]: (slice: TitleSlice, action: Payload<Title>) => ({
      ...slice,
      state: ActionState.RESOLVED,
      error: null,
      title: action.payload,
    }),
    [titleGet.rejected.type]: (slice: TitleSlice, action: Payload<Error>) => ({
      ...slice,
      state: ActionState.REJECTED,
      error: action.payload,
    }),
  },
})
