import React from 'react';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { activeError, showForm, startAddProject } from '../../actions/proyectos';

//Hooks
import { useForm } from '../../hooks/useForm';

export const NuevoProyecto = () => {

	const dispatch = useDispatch();
	const { formulario, errorFormulario } = useSelector((state) => state.proyectos);

	const [formValues, handleInputChange, reset ] = useForm({
		nombre: '',
	});

	const handleNuevoProyecto = (e) => {
		e.preventDefault();

		if (formValues.nombre.trim() === '') {
			
			dispatch(activeError())
			return false

		} else {

			formValues.id = Date.now()
			dispatch(startAddProject(formValues))
	
			reset()
		}
	};

	const handleNew = () => {
		dispatch(showForm());
	};

	return (
		<>
			<button
				type="button"
				className="btn btn-block btn-primario"
				onClick={handleNew}
			>
				Nuevo Proyecto
			</button>

			{formulario && (
				<form
					className="formulario-nuevo-proyecto"
					onSubmit={handleNuevoProyecto}
				>
					<input
						type="text"
						className="input-text"
						placeholder="Nombre Proyecto"
						name="nombre"
						value={formValues.nombre}
						onChange={handleInputChange}
					/>

					<button type="submit" className="btn btn-primario btn-block">
						Agregar
					</button>
				</form>
			)}

			{errorFormulario && <p className="mensaje error">El nombre del proyecto es obligatorio</p>}
		</>
	);
};
