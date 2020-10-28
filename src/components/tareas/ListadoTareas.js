import React, { useEffect } from 'react';

//Redux
import { useSelector, useDispatch } from 'react-redux';

//Actions
import { startDeleteProject } from '../../actions/proyectos';
import { startListTasks } from '../../actions/tareas';

//Components
import { Tarea } from './Tarea';

export const ListadoTareas = () => {

	const { proyectoActivo } = useSelector((state) => state.proyectos);
	const { tareasProyecto } = useSelector((state) => state.tareas);

	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(startDeleteProject())
	}

	return (
		<>
			{!proyectoActivo ? (
				<h2>Selecciona un Proyecto</h2>
			) : (
				<>
					<h2>Proyecto: {proyectoActivo?.nombre}</h2>
					<ul className="listado-tareas">
						{tareasProyecto.length === 0 ? (
							<li className="tarea">
								<p>No hay tarea</p>
							</li>
						) : (
							tareasProyecto.map((tarea) => (
								<Tarea key={tarea._id} tarea={tarea} />
							))
						)}
					</ul>
                    <button type="button" className="btn btn-eliminar" onClick={handleDelete}>
                        Eliminar Proyecto &times;
                    </button>
				</>
			)}

		</>
	);
};
