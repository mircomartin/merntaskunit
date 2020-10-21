import { types } from "../types/types"

//Activar Formulario Nuevos Proyectos
export const showForm = () => ({

    type: types.mostrarFormulario,

})

export const activeError = () => ({

    type: types.activeErrorForm,

})

//Mostrar todos los proyectos
export const startListProjects = (proyectos) => {
    return (dispatch) => {
        try {
            dispatch(listarProjects(proyectos))
        } catch (error) {
            console.log(error)
        }
    }
}

const listarProjects = (proyectos) => ({
    type: types.listarProyectos,
    payload: proyectos
})

//Agregar Proyectos
export const startAddProject = (project) => {
    return (dispatch) => {
        try {
            dispatch(addProject(project))
        } catch (error) {
            console.log(error)
        }
    }
}

const addProject = (project) => ({
    type: types.addProyect,
    payload: project,
})

//Proyecto Activo
export const startActiveProject = (activo) => {
    return (dispatch) => {
        try {
            dispatch(activeProject(activo))
        } catch (error) {
            console.log(error)
        }
    }
}

const activeProject = (activo) => ({
    type: types.projectActive,
    payload: activo,
})


//Eliminar Proyecto
export const startDeleteProject = () => {
    return (dispatch, getState) => {

        const { proyectoActivo } = getState().proyectos
        
        try {
            dispatch(deleteProject(proyectoActivo.id))
        } catch (error) {
            console.log(error)
        }
    }
}

const deleteProject = (id) => ({
    type: types.deleteProject,
    payload: id,
})