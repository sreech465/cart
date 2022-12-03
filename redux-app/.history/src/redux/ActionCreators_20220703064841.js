import { ActionTypes } from "./ActionTypes"

const eligibleForOscar = (users)=>{
    return{
        type:ActionTypes.ELIGIBLE_FOR_OSCAR,
        payload:users
    }
}