import React, { useEffect } from 'react';

//Redux
import { useSelector, useDispatch } from 'react-redux';

//Actions
import { errorTask, projectTasks, startAddTask, startUpdateState } from '../../actions/tareas';

//Hooks
import { useForm } from '../../hooks/useForm';

export const FormTarea = () => {

	const dispatch = useDispatch();
	const { proyectoActivo } = useSelector((state) => state.proyectos);
	const { errorTarea, tareaActiva } = useSelector((state) => state.tareas);

	const [ formValues, handleInputChange, reset ] = useForm({
		nombre: '',
		estado: false,
	})

	useEffect(() => {
		if(tareaActiva?.id){
			reset(tareaActiva)
		}
		// eslint-disable-next-line
	}, [tareaActiva])

	const handleNewTask = (e) => {
		e.preventDefault()

		if (formValues.nombre.trim() === '') {

			dispatch(errorTask())
			return false

		} else {

			if (!tareaActiva) {

				formValues.id = Date.now()
				formValues.proyectoID = proyectoActivo.id
	
				dispatch(startAddTask(formValues))
	
				reset()
	
			} else {

				dispatch(startUpdateState(formValues))
				
				reset()

			}

			dispatch(projectTasks(proyectoActivo.id))

		}
	}

	return (
		proyectoActivo && (
			<div className="formulario">
				<form onSubmit={handleNewTask}>
					<div className="contenedor-input">
						<input
							type="text"
							name="nombre"
							className="input-text"
							placeholder="Nombre Tarea..."
							onChange={handleInputChange}
							value={formValues.nombre}
						/>
					</div>
					<div className="contenedor-input">
						<button
							type="submit"
							className="btn btn-primario btn-submit btn-block"
						>
							{tareaActiva ? 'Editar Tarea' : 'Agregar Tarea'}
						</button>
					</div>
				</form>
				{errorTarea && <p className="mensaje error">El nombre de la tarea es obligatorio</p>}
			</div>
		)
	);
};
