import { Dispatch } from "redux";
import { Action } from ".";
import { ActionTypes } from "./action-types";

export function incomeAmount(amount:number){
  return(dispatch:Dispatch<Action>) =>{
    dispatch({
      type: ActionTypes.INCOME,
      payload: amount
    })
  }
}

export function outcomeAmount(amount:number){
  return(dispatch:Dispatch<Action>) =>{
    dispatch({
      type: ActionTypes.OUTCOME,
      payload: amount
    })
  }
}