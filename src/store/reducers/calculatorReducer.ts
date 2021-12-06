import { Action } from "../actions"
import { ActionTypes } from "../actions/action-types"

const initialState = 0

export default function reducer(state: number = initialState, action: Action){
  switch(action.type){
    case ActionTypes.INCOME:
      return state + action.payload
    case ActionTypes.OUTCOME:
      return state - action.payload
    default:
      return state
  }
}