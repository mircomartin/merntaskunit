//Helpers
import { clienteAxios } from "../config/axios"
import { tokenAuth } from "../config/token"

//Actions
import { types } from "../types/types"


//Nuevo Usuario
export const startRegisterUser = (nombre, email, password) => {
    return async (dispatch) => {

        try {
            const resp = await clienteAxios.post('/api/usuarios', {nombre, email, password})

            localStorage.setItem('token', resp.data.token);

            dispatch(startLoggedUser())

        } catch (error) {
            console.log(error)
            console.log(error.response.data.msg)

            const alert = {
                mensaje: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch(errorLogin(alert))
        }
    }
}

//Usuario Logueado
export const startLoggedUser = () => {
    return async (dispatch) => {

        const token = localStorage.getItem('token');

        if(token) {
            tokenAuth(token)
        }

        try {

            const resp = await clienteAxios.get('/api/auth')
            
            const userLogged = {
                uid: resp.data.usuario._id,
                nombre: resp.data.usuario.nombre,
            }
            
            dispatch(login(userLogged))
            
        } catch (error) {
            console.log(error)
            dispatch(finishChecking())
        }
    }
}

//Iniciar Sesion
export const startLoginEmailPassword = (email, password) => {
    return async (dispatch) => {
        try {
            
            const resp = await clienteAxios.post('/api/auth', {email, password})

            localStorage.setItem('token', resp.data.token);

            dispatch(startLoggedUser())

        } catch (error) {
            console.log(error.response.data.msg)

            const alert = {
                mensaje: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch(errorLogin(alert))

        }
    }
}

const login = (usuarioLogueado) => ({
    type: types.login,
    payload: usuarioLogueado
})

//Cerrar Sesion
export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout())
    }
}

const logout = () => ({
    type: types.logout,
})

//Error
const errorLogin = (error) => ({
    type: types.loginError,
    payload: error
})

//Finish Checking
const finishChecking = () => ({
	type: types.finishChecking,
});

