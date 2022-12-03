import { ActionTypes } from "../ActionTypes"

const initialState = {
    users: [],
    cartData :[]
}


export const ProductReducer = (state=initialState,action)=>{

    switch(action.type){
        case ActionTypes.ELIGIBLE_FOR_OSCAR:
            return{...state,cartData:[...state.cartData,action.payload]};

            default:
                return state;
    }


}