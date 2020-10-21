import React from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux'

//Actions
import { activedTask, projectTasks, startDeleteTask, startUpdateState } from '../../actions/tareas';

export const Tarea = ({ tarea }) => {

	const dispatch = useDispatch();
	const { proyectoActivo} = useSelector(state => state.proyectos )

	const handleDelete = () => {
		dispatch(startDeleteTask(tarea.id))

		dispatch(projectTasks(proyectoActivo.id))
	}

	const handleState = () => {
		if(tarea.estado) {
			tarea.estado = false
		} else {
			tarea.estado = true
		}

		dispatch(startUpdateState(tarea))
	}

	const handleEdit = () => {
		dispatch(activedTask(tarea))
	}
	return (
		<li className="tarea sombra">
			<p>{tarea.nombre}</p>

			<div className="estado">
				{tarea.estado ? (
					<button type="button" className="completo" onClick={handleState}>
						Completo
					</button>
				) : (
					<button type="button" className="incompleto" onClick={handleState}>
						Incompleto
					</button>
				)}
			</div>
			<div className="acciones">
				<button type="button" className="btn btn-primario" onClick={handleEdit}>
					Editar
				</button>
				<button type="button" className="btn btn-secundario" onClick={() => handleDelete(tarea.id)}>
					Eliminar
				</button>
			</div>
		</li>
	);
};
