import React, { useEffect } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';

//Router
import { Link } from 'react-router-dom';

//Actions
import { showAlert } from '../../actions/alertas';
import { startLoginEmailPassword } from '../../actions/auth';

//Hook
import { useForm } from '../../hooks/useForm';

export const Login = () => {
	const dispatch = useDispatch();
	const { alert } = useSelector((state) => state.alertas);
	const { mensaje } = useSelector((state) => state.auth);
	
	const [formValues, handleInputChange] = useForm({
		email: '',
		password: '',
	});

	const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();

		if (email.trim() === '' || password.trim() === '') {
			dispatch(showAlert('Todos los campos son obligatorios', 'alerta-error'));
			return false;
		} else {
			dispatch(startLoginEmailPassword(email, password));
		}
	};

	useEffect(() => {
		if(mensaje) {
			dispatch(showAlert(mensaje.mensaje, mensaje.categoria))
		}
	}, [mensaje])

	return (
		<div className="form-usuario">
			{alert && <div className={`alerta ${alert.categoria}`}>{alert.mensaje}</div>}

			<div className="contenedor-form sombra-dark">
				<h1>Iniciar Sesión</h1>

				<form onSubmit={handleLogin}>
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
						<button type="submit" className="btn btn-primario btn-block">
							Iniciar Sesion
						</button>
					</div>
				</form>
				<Link to="/auth/register" className="enlace-cuenta">
					Obtener cuenta
				</Link>
			</div>
		</div>
	);
};
