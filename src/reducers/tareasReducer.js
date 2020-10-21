import { types } from '../types/types';

const initialState = {
	tareas: [],
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
				tareas: action.payload,
			};
		case types.listarTareasProyecto:
			return {
				...state,
				tareasProyecto: state.tareas.filter(
					(tarea) => tarea.proyectoID === action.payload,
				),
			};
		case types.activedTask:
			return {
				...state,
				tareaActiva: action.payload,
			};
		case types.addTask:
			return {
				...state,
				tareas: [...state.tareas, action.payload],
				errorTarea: false,
			};
		case types.deleteTask:
			return {
				...state,
				tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
				tareaActiva: null,
			};
		case types.updatedStateTask:
			return {
				...state,
				tareas: state.tareas.map((tarea) =>
					tarea.id === action.payload.id ? action.payload : tarea,
				),
				tareaActiva: null,
			};
		default:
			return state;
	}
};
