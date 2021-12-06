import { combineReducers } from 'redux'
import calculatorReducer from './calculatorReducer'

const reducers = combineReducers({
  calculator: calculatorReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>