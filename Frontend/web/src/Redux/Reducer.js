import { ALL_EMP_DATA_FAILURE, ALL_EMP_DATA_REQUEST, ALL_EMP_DATA_SUCCESS } from "./ActionTypes";

const initialState = {
    AllEmpData:null,
    isLoading:false,
    error:null
}

export const allReducer = (state = initialState, action)=>{
    switch(action.type){
        case ALL_EMP_DATA_REQUEST:
            return {...state,isLoading:true, error:null};
        case ALL_EMP_DATA_SUCCESS:
            return {...state,isLoading:false, AllEmpData:action.payload};
        case ALL_EMP_DATA_FAILURE:
            return {...state,isLoading:false, error:action.payload};
        default:
            return state;
    }
}