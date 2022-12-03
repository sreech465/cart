import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";


const reducer =  combineReducers({
    productsData : ProductReducer
})