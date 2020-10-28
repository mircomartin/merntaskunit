import { types } from '../types/types';

const initialState = {
	tareasProyecto: [],
	errorTarea: false,
	tareaActiva: null,
};

export const tareasReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.activeErrorTask:
			return {
				...state,
				errorTarea: true,
			};
		case types.listarTareas:
			return {
				...state,
				tareasProyecto: action.payload,
			};
		case types.activedTask:
			return {
				...state,
				tareaActiva: action.payload,
			};
		case types.addTask:
			return {
				...state,
				tareasProyecto: [...state.tareasProyecto, action.payload],
				errorTarea: false,
			};
		case types.deleteTask:
			return {
				...state,
				tareasProyecto: state.tareasProyecto.filter((tarea) => tarea._id !== action.payload),
				tareaActiva: null,
			};
		case types.updatedStateTask:
			return {
				...state,
				tareasProyecto: state.tareasProyecto.map((tarea) =>
					tarea._id === action.payload._id ? action.payload : tarea,
				),
				tareaActiva: null,
			};
		default:
			return state;
	}
};
