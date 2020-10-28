import React, { useEffect } from 'react';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { showAlert } from '../../actions/alertas';
import { startListProjects } from '../../actions/proyectos';

//Component
import { Proyecto } from './Proyecto';

export const ListadoProyectos = () => {
	const dispatch = useDispatch();
	const { proyectos, mensaje } = useSelector((state) => state.proyectos);
	const { alert } = useSelector((state) => state.alertas);

	useEffect(() => {

		dispatch(startListProjects());
		// eslint-disable-next-line

	}, [dispatch]);
    
    useEffect(() => {
        if (mensaje) {
            dispatch(showAlert(mensaje.mensaje, mensaje.categoria));
        }
    }, [mensaje])
    

	return (
		<ul className="listado-proyectos">
			{alert && <div className={`alerta ${alert.categoria}`}>{alert.mensaje}</div>}

			{proyectos.length === 0 ? (
				<p>No hay proyectos cargados</p>
			) : (
				proyectos?.map((proyecto) => (
					<Proyecto key={proyecto._id} proyecto={proyecto} />
				))
			)}
		</ul>
	);
};
