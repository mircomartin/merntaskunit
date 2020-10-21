import { types } from "../types/types";

const initialState = {
    proyectos: [],
    errorFormulario: false,
    formulario: false,
    proyectoActivo: null,
}

export const proyectosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.mostrarFormulario:
            return {
                ...state,
                formulario: true,
            }
        case types.activeErrorForm:
            return {
                ...state,
                errorFormulario: true,
            }
        case types.projectActive:
            return {
                ...state,
                proyectoActivo: action.payload,
            }
        case types.listarProyectos:
            return {
                ...state,
                proyectos: action.payload,
                formulario: false,
            }
        case types.addProyect:
            return {
                ...state,
                proyectos: [...state.proyectos, action.payload],
                formulario: false,
                errorFormulario: false,
            }
        case types.deleteProject:
            return {
                ...state,
                proyectos: state.proyectos.filter( proyecto => proyecto.id !== action.payload),
                proyectoActivo: null
            }
        default:
            return state;
    }
}