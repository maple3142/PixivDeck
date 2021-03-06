// @flow
import update from 'utils/update'
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type ColumnManagerId = string
export type ColumnId = string
export type ColumnType =
  | 'RANKING'
  | 'RANKING_R18'
  | 'BOOKMARK'
  | 'FOLLOW'
  | 'USER_ILLUST'
  | 'SEARCH'
  | 'HISTORY'
  | 'RECOMMENDED'

export type ColumnManager = {
  columnId: ColumnId,
  type: ColumnType,
}

export type Column = {
  title: string,
}

export type State = {
  [id: ColumnManagerId]: ColumnManager,
}

export default function(state: State = {}, action: Action): $Shape<State> {
  switch (action.type) {
    case Actions.ADD_TABLE:
      return update(state, action, action.maneger)
    default:
      return state
  }
}
