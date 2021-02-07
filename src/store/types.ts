export enum ActionTypes {
  SHOWS_GET = 'app/folders/SHOWS_GET',
  TITLE_GET = 'app/folders/TITLE_GET',
}

export enum ActionState {
  IDLE = 'idle',
  PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected',
}

export type Action = {
  type: string
  payload: any
}

export type Nullable<T> = T | null | undefined

export type Slice = {
  state: ActionState
  error: Nullable<Error>
}

export type Title = {
  id: number
  name: string
  type: string
  [rest: string]: any
}

export type Movie = {
  score: number
  show: Title
}
