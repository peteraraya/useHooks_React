
const initialState = [{
    id: 1,
    todo: 'Comprar Leche',
    done: false
}];


// Puede ser considerado un reducer

const todoReducer = (state = initialState, action) => {

    // ya que solo me esta devolviendo el estado anterior agrego un if, y agregamos ? en el action en caso de error por undefined
    if (action?.type === 'agregar') {

        return [...state, action.payload]
    }

    return state
}
let todos = todoReducer();



// añadir un nuevo elemento a un todo
// no utilizar push

const newTodo = {
    id: 2,
    todo: 'Comprar Leche',
    done: false
}

// A traves de la acción enviamos más información

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos)

