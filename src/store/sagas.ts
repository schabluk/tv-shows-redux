import { call, put, takeLatest } from 'redux-saga/effects'

import { ActionTypes, Action } from './types'
import { getShows, getTitle } from './api'
import { shows, title } from './slices'

function* fetchShows(action: Action) {
  yield put(shows.actions.started())

  try {
    const result = yield call(getShows, action.payload)

    yield put(shows.actions.success(result))
  } catch (error) {
    yield put(shows.actions.failure(error))
  }
}

function* fetchTitle(action: Action) {
  // yield put(title.actions.started())
  try {
    const result = yield call(getTitle, action.payload)

    // yield put(title.actions.success(result))
  } catch (error) {
    // yield put(title.actions.failure(error))
  }
}

export default function* root() {
  yield takeLatest(ActionTypes.SHOWS_GET, fetchShows)
  // yield takeLatest(ActionTypes.TITLE_GET, fetchTitle);
}
