import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//Reducers
import { alertasReducer } from '../reducers/alertasReducer';
import { authReducer } from '../reducers/authReducer';
import { proyectosReducer } from '../reducers/proyectosReducer';
import { tareasReducer } from '../reducers/tareasReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    proyectos: proyectosReducer,
    tareas: tareasReducer,
    alertas: alertasReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);