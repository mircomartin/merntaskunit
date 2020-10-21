import React from 'react'

//Components
import { Barra } from '../components/layout/Barra'
import { Sidebar } from '../components/layout/Sidebar'
import { FormTarea } from '../components/tareas/FormTarea'
import { ListadoTareas } from '../components/tareas/ListadoTareas'

export const Dashboard = () => {
    return (
        <div className="contenedor-app">
            <Sidebar/>

            <div className="seccion-principal">

                <Barra/>

                <main>

                    <FormTarea/>
                    <div className="contenedor-tareas">
                        <ListadoTareas/>
                    </div>
                </main>
            </div>
        </div>
    )
}
