import React from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux'

//Actions
import { logout } from '../../actions/auth'

export const Barra = () => {
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <header className="app-header">
            <p className="nombre-usuario">Hola, <span>{user.nombre}</span></p>

            <nav className="nav-principal">
                <span className="btn btn-primario" onClick={handleLogout}>Cerrar Sesión</span>
            </nav>
        </header>
    )
}
