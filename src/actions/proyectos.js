import { clienteAxios } from "../config/axios"
import { types } from "../types/types"

//Activar Formulario Nuevos Proyectos
export const showForm = () => ({

    type: types.mostrarFormulario,

})

export const activeError = () => ({

    type: types.activeErrorForm,

})

//Mostrar todos los proyectos
export const startListProjects = () => {
    return async (dispatch) => {
        try {

            const res = await clienteAxios.get('/api/proyectos')
            
            dispatch(listarProjects(res.data.proyectos))

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
    return async (dispatch) => {
        try {

            const res = await clienteAxios.post('/api/proyectos', project)
            console.log(res)
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
    return async (dispatch, getState) => {

        const { proyectoActivo } = getState().proyectos
        
        try {

            await clienteAxios.delete(`/api/proyectos/${proyectoActivo._id}`)
            dispatch(deleteProject(proyectoActivo._id))
            
        } catch (error) {
            console.log(error)

            const alert = {
                mensaje: 'Hubo un error',
                categoria: 'alerta-error'
            }
            console.log(alert)
            dispatch({
                type: types.errorProject,
                payload: alert
            })
        }
    }
}

const deleteProject = (id) => ({
    type: types.deleteProject,
    payload: id,
})
