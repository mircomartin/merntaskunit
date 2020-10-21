import { types } from "../types/types"

//Listar Tareas
export const startListTasks = (tareas) => {
    return (dispatch) => {
        try {
            dispatch(listTasks(tareas))

        } catch (error) {
            console.log(error)
        }
    }
}

const listTasks = (tareas) => ({
    type: types.listarTareas,
    payload: tareas,
})

export const projectTasks = (id) => ({
    type: types.listarTareasProyecto,
    payload: id
})

//Agregar Tarea
export const startAddTask = (task) => {
    return (dispatch) => {
        try {
            dispatch(addTask(task))
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
export const startDeleteTask = (id) => {
    return (dispatch) => {
        try {
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
    return (dispatch) => {
        try {
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