import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group listo-group-flush">
            {
                todos.map((todo, i) => (
                 <TodoListItem 
                        key = { todo.id }
                        todo = { todo } 
                        index =  { i } 
                        handleDelete = { handleDelete }
                        handleToggle={handleToggle }
                 />
                ))
            }
        </ul>
    )
}


/**
 * el indice nunca debemos ocuparlo de index
 *   */ 
