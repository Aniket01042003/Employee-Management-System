import axios from "axios";
import { ALL_EMP_DATA_FAILURE, ALL_EMP_DATA_REQUEST, ALL_EMP_DATA_SUCCESS } from "./ActionTypes";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AllEmpReq = () => ({ type: ALL_EMP_DATA_REQUEST });
const AllEmpSuc = (data) => ({ type: ALL_EMP_DATA_SUCCESS, payload: data });
const AllEmpFail = (error) => ({ type: ALL_EMP_DATA_FAILURE, payload: error });

export const getAllEmpData = () => async (dispatch) => {
    dispatch(AllEmpReq());
    try {
        const response = await axios.get(`${API_BASE_URL}/employee`);
        const data = response.data;
        console.log("data from getemp action.js", data);

        dispatch(AllEmpSuc(data));

    } catch (error) {
        dispatch(AllEmpFail(error.message));
    }
}