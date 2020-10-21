import React from 'react'

//Redux
import { useDispatch } from 'react-redux'

//Actions
import { startActiveProject } from '../../actions/proyectos';
import { projectTasks } from '../../actions/tareas';

export const Proyecto = ({proyecto}) => {

    const dispatch = useDispatch();

    const handleSelect =  () => {
        dispatch(startActiveProject(proyecto))
        dispatch(projectTasks(proyecto.id))
    }

    return (
        <li onClick={handleSelect}>
            <button
                type="button"
                className="btn btn-blank"
            >
                {proyecto.nombre}
            </button>
        </li>
    )
}
