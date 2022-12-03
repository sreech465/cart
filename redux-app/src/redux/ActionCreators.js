import { ActionTypes } from "./ActionTypes"

export const eligibleForOscar = (users1)=>{
    return{
        type:ActionTypes.ELIGIBLE_FOR_OSCAR,
        payload:users1
    }
}

export const notEligibleForOscar = (id)=>{
    return{
        type:ActionTypes.NOTEELIGIBLE_FOR_OSCAR,
        payload:id
    }
}