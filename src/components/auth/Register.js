import React, { useEffect } from 'react'

//Redux
import { useDispatch, useSelector } from 'react-redux'

//Router
import { Link } from 'react-router-dom'
import { showAlert } from '../../actions/alertas'
import { startRegisterUser } from '../../actions/auth'

//Hooks
import { useForm } from '../../hooks/useForm'

export const Register = () => {
    const { alert } = useSelector(state => state.alertas)
	const { mensaje } = useSelector((state) => state.auth);

    const dispatch = useDispatch()
    const [ formValues, handleInputChange ] = useForm({
        nombre:'Diego',
        email:'diego@carlos.com',
        password:'123456',
        password2:'123456',
    })

    const { nombre, email, password, password2 } = formValues

    const handleRegister = e => {
        e.preventDefault();

        if( nombre.trim() === '' || email.trim() === '' || password.trim() === '' || password2.trim() === '' ) {
            dispatch(showAlert('Todos los campos son obligatorios', 'alerta-error'))
            return false
        } else if ( password.length < 6 ) {
            dispatch(showAlert('El password debe tener al menos 6 caracteres', 'alerta-error'))
            return false
        } else if ( password !== password2 ) {
            dispatch(showAlert('Los password no son iguales', 'alerta-error'))
            return false
        }

        dispatch(startRegisterUser(nombre, email, password))

    }

    useEffect(() => {
		if(mensaje) {
			dispatch(showAlert(mensaje.mensaje, mensaje.categoria))
		}
	}, [mensaje])

    return (
        <div className="form-usuario">
            {alert && (<div className={`alerta ${alert.categoria}`}>{alert.mensaje}</div>)}
            <div className="contenedor-form sombra-dark">
                <h1>Crea una cuenta</h1>

                <form onSubmit={handleRegister}>
                <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            onChange={handleInputChange}
                            value={nombre}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            onChange={handleInputChange}
                            value={email}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            onChange={handleInputChange}
                            value={password}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password2">Repetir Password</label>
                        <input
                            type="password"
                            id="password2"
                            name="password2"
                            placeholder="Repetir tu Password"
                            onChange={handleInputChange}
                            value={password2}
                        />
                    </div>
                    <div className="campo-form">
                        <button type="submit" className="btn btn-primario btn-block">Crear Cuenta</button>
                    </div>
                </form>
                <Link to="/auth/login" className="enlace-cuenta">Volver a Iniciar Sesion</Link>
            </div>
        </div>
    )
}
