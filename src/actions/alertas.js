import { types } from "../types/types";

export const showAlert = (mensaje, categoria) => {
    return (dispatch) => {
        dispatch({
            type: types.alertShowed,
            payload: {mensaje, categoria},
        })
        setTimeout(() => {
            dispatch({
                type: types.alertHided,
            })
        }, 4000);
    }
}