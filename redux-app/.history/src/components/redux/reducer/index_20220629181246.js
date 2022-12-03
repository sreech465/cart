//we need to combine all the reducers in a single place

import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";


export const reducer = combineReducers({
    productsData : ProductReducer,
    
})