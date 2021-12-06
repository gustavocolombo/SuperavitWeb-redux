import { ActionTypes } from "./action-types";

interface IncomeAction{
  type: ActionTypes.INCOME,
  payload: number
}

interface OutcomeAction{
  type: ActionTypes.OUTCOME,
  payload: number
}

export type Action = IncomeAction | OutcomeAction