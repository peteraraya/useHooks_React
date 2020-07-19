import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import './style.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprende React',
//     donae: false
// }];

// Función init
const init = () => {
    // return[{
    //     id: new Date().getTime(),
    //     desc: 'Aprende React',
    //     donae: false
    // }];

    return JSON.parse(localStorage.getItem('todos')) || [];
    // Si existen todos: regresos esos todos como arreglos
    //  si no existen debo regresar un arreglo vació que va ser mi estado inicial

}


export const TodoApp = () => {

    // reducer      : tiene que ser la función reducer
    // initialState : es un estado incial que podemos mandar
    // init         : es usado como una función para inicializar el state em caso que el state sea como procesado o haga varias acciones, puede memorizar el estado

    // dispatch : ayudar a disparar las acciones y va a saber a quereducer ahay que mandar la información y cuando cambie el state va a redibujar lo que cambie
    // a este se le envia la aaccion

    // función init nos va ayudar  a computar todo el estado inicial para que funcione más rapido el componente y esa función no se esté ejecutando a cada vez que hay cambios


    const [todos, dispatch] = useReducer(todoReducer, [], init);


    // conectamos nuestro customhook con un onChange y debo asignarle el value
    // Grabar en localstorage que solo guarda strings

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);


    const handleDelete = ( todoId ) => {

        // console.log( todoId );

        // creamos accion
        const action = {
            type: 'delete',
            payload: todoId
        }

        // hacer el dispath
        dispatch( action );

    }

    const handleToggle = ( todoId ) =>{
        dispatch({
            type:'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = ( newTodo ) =>{

        dispatch({
            type: 'add',
            payload: newTodo
        });
    }


    return (
        <div>
            <h1>TodoApp ({todos.length}) </h1>
            <hr />
            <div className="row">

                <div className="col-7">
                   
                   <TodoList
                        // proptypes
                        todos={ todos }
                        handleDelete = { handleDelete }
                        handleToggle = { handleToggle }
                   />
                </div>
                <div className="col-5">
                    
                   <TodoAdd
                        handleAddTodo={ handleAddTodo }
                   />
                </div>

            </div>
        </div>
    )
}



// Grabar información en localstorage - cuando los todos cambien
// usaremos useEffect


// el efecto se va encargar de guardar cualquier cambio que exista en esos todos (agrege, modifique lo va grabar en locastorage)
