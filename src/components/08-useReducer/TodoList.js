import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDelete, handleToogle}) => {
    return (
        <ul className="list-group listo-group-flush">
            {
                todos.map((todo, i) => (
                 <TodoListItem 
                        key = { todo.id }
                        todo = { todo } 
                        index =  { i } 
                        handleDelete = { handleDelete }
                        handleToogle = { handleToogle }
                 />
                ))
            }
        </ul>
    )
}


/**
 * el indice nunca debemos ocuparlo de index
 *   */ 
