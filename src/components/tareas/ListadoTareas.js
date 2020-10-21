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
	const { tareasProyecto: tareas } = useSelector((state) => state.tareas);

	const dispatch = useDispatch();

	const tareasProyecto = [
		{ id: 1, nombre: 'Tienda Virtual', estado: true, proyectoID: 1 },
		{ id: 2, nombre: 'Intranet', estado: true, proyectoID: 1 },
		{ id: 3, nombre: 'Diseño del Sitio', estado: false, proyectoID: 3 },
		{ id: 4, nombre: 'Maquetado', estado: false, proyectoID: 2 },
	];

	useEffect(() => {
		
		dispatch(startListTasks(tareasProyecto))

	}, [])

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
						{tareas.length === 0 ? (
							<li className="tarea">
								<p>No hay tarea</p>
							</li>
						) : (
							tareas.map((tarea) => (
								<Tarea key={tarea.id} tarea={tarea} />
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
