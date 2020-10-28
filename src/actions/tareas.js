import { clienteAxios } from "../config/axios"
import { types } from "../types/types"

//Listar Tareas
export const startListTasks = (proyecto) => {
    return async (dispatch) => {
        try {

            const resp = await clienteAxios.get('/api/tareas', { params: {proyecto} })

            dispatch(listTasks(resp.data.tareas))

        } catch (error) {
            console.log(error)
        }
    }
}

const listTasks = (tareas) => ({
    type: types.listarTareas,
    payload: tareas,
})

//Agregar Tarea
export const startAddTask = (task) => {
    return async (dispatch) => {
        try {

            const resp = await clienteAxios.post('/api/tareas', task)
            
            dispatch(addTask(resp.data.tarea))

        } catch (error) {
            console.log(error)
        }
    }
}

const addTask = (task) => ({
    type: types.addTask,
    payload: task
})

//Error Tarea
export const errorTask = () => ({
    type: types.activeErrorTask
})

//Eliminar Tarea
export const startDeleteTask = (id, proyecto) => {
    return async (dispatch) => {
        try {

            await clienteAxios.delete(`/api/tareas/${id}`, { params: {proyecto} })
            dispatch(deletedTask(id))

        } catch (error) {
            console.log(error)
        }
    }
}

const deletedTask = (id) => ({
    type: types.deleteTask,
    payload: id
})

//Editar Estado
export const startUpdateState = (tarea) => {
    return async (dispatch) => {
        try {
            await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea)
            dispatch(updatedState(tarea))
        } catch (error) {
            console.log(error)
        }
    }
}

const updatedState = (tarea) => ({
    type: types.updatedStateTask,
    payload: tarea,
})

//Tarea Activa
export const activedTask = (tarea) => ({
    type: types.activedTask,
    payload: tarea
})