import { types } from '../types/types';

const initialState = {
	logged: null,
	user: null,
    mensaje: null,
    checking: true,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.login:
			return {
				...state,
				logged: true,
                user: action.payload,
                mensaje: null,
                checking: false,
			};
		case types.logout:
			return {
                ...initialState,
                checking: false,
			};
		case types.loginError:
			return {
				...state,
				mensaje: action.payload,
            };
        case types.finishChecking:
			return {
				...state,
				checking: false,
			};
		default:
			return state;
	}
};
