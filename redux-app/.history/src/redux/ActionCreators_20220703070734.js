import { ActionTypes } from "./ActionTypes"

export const eligibleForOscar = (users1)=>{
    return{
        type:ActionTypes.ELIGIBLE_FOR_OSCAR,
        payload:users1
    }
}