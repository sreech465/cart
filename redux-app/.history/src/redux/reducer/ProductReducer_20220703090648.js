import { ActionTypes } from "../ActionTypes"

const initialState = {
    users: [],
    cartData :[]
}


export const ProductReducer = (state=initialState,action)=>{

    switch(action.type){
        case ActionTypes.ELIGIBLE_FOR_OSCAR:
            console.log(action)
            return{...state,cartData:[...state.cartData,action.payload]};

            case ActionTypes.NOTEELIGIBLE_FOR_OSCAR:
                const disqualifiedUsers = state.cartData.filter((cartperson)=>cartperson.id!==action.payload );
                return {...state,cartData:disqualifiedUsers}

            default:
                return state;
    }


}