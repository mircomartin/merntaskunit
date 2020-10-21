import { types } from "../types/types";

const initialState = {
    alert: false,
}

export const alertasReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.alertShowed:
            return {
                ...state,
                alert: action.payload,
            }
        case types.alertHided:
            return {
                ...state,
                alert: false,
            }
        default:
            return state;
    }
}