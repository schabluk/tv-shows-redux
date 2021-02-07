import { createSelector } from '@reduxjs/toolkit'
import { ApplicationStore as Store } from '../types'
import { ActionState } from './types'
import { initialStateShows, initialStateTitle } from './slices'
import type { ShowsSlice, TitleSlice } from './slices'

export const domainShows = (store: Store): ShowsSlice =>
  store.shows ?? initialStateShows

export const domainTitle = (store: Store): TitleSlice =>
  store.title ?? initialStateTitle

export default {
  shows: {
    isLoading: createSelector(
      domainShows,
      ({ state }) => state === ActionState.PENDING,
    ),
  },
  title: {
    isLoading: createSelector(
      domainTitle,
      ({ state }) => state === ActionState.PENDING,
    ),
  },
}
