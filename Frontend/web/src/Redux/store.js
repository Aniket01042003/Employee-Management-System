import { applyMiddleware, combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import { allReducer } from "./Reducer.js";
import { thunk } from "redux-thunk";

const rootReducers = combineReducers({
    emp: allReducer
})

export const  store = legacy_createStore(rootReducers, applyMiddleware(thunk));


