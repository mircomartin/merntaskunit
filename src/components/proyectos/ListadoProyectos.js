import React, { useEffect } from 'react';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { startListProjects } from '../../actions/proyectos';

//Component
import { Proyecto } from './Proyecto'


export const ListadoProyectos = () => {

    const dispatch = useDispatch();
    const { proyectos } = useSelector(state => state.proyectos)

    useEffect(() => {
        dispatch(startListProjects())
        // eslint-disable-next-line 
    }, [dispatch])

    return (
        <ul className="listado-proyectos">
            {
                proyectos.length === 0 
                ? <p>No hay proyectos cargados</p>
                : proyectos?.map((proyecto) => (
                    <Proyecto key={proyecto._id} proyecto={proyecto}/>
                ))
            }
        </ul>
    )
}
