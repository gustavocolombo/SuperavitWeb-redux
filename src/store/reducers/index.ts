import { combineReducers } from 'redux'
import calculatorReducer from './calculatorReducer'
import { reducerIncome, reducerOutcome } from './calculatorReducer';

const reducers = combineReducers({
  calculator: calculatorReducer,
  income: reducerIncome,
  outcome: reducerOutcome
})

export default reducers;

export type State = ReturnType<typeof reducers>