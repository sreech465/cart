
import {createStore,applyMiddleware} from 'redux';
import { reducer } from '.';
import thunk from 'react-redux'





export const Store = createStore(reducer,{})
