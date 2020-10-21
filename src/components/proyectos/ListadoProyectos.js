import React, { useEffect } from 'react';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { startListProjects } from '../../actions/proyectos';

//Component
import { Proyecto } from './Proyecto'


export const ListadoProyectos = () => {
    const proyectos2=[
        {id:1, nombre: 'Tienda Virtual'},
        {id:2, nombre: 'Intranet'},
        {id:3, nombre: 'Diseño del Sitio'}
    ]

    const dispatch = useDispatch();
    const { proyectos } = useSelector(state => state.proyectos)

    useEffect(() => {
        dispatch(startListProjects(proyectos2))
        // eslint-disable-next-line 
    }, [dispatch])

    return (
        <ul className="listado-proyectos">
            {
                proyectos.length === 0 
                ? <p>No hay proyectos cargados</p>
                : proyectos?.map((proyecto) => (
                    <Proyecto key={proyecto.id} proyecto={proyecto}/>
                ))
            }
        </ul>
    )
}
