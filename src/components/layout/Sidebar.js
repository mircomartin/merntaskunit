import React from 'react'

//Components
import { ListadoProyectos } from '../proyectos/ListadoProyectos'
import { NuevoProyecto } from '../proyectos/NuevoProyecto'

export const Sidebar = () => {
    return (
        <aside>
            <h1>Mern <span>Tasks</span></h1>

            <NuevoProyecto/>

            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <ListadoProyectos/>
            </div>
        </aside>
    )
}
