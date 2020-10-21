const { clienteAxios } = require("./axios")

export const tokenAuth = token => {
    if(token){
        clienteAxios.defaults.headers.common['x-auth-token'] = token
    } else {
        delete clienteAxios.defaults.headers.common['x-auth-token']

    }
}