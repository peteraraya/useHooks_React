
export const todoReducer = (state = [] , action) => {

    switch ( action.type ) {
        case 'add':
            
            return [ ...state, action.payload];

        case 'delete':

            return state.filter( todo => todo.id !==  action.payload ); 
    

        case 'toogle':

            return state.map( todo =>
                ( todo.id === action.payload )
                    ? { ...todo, done: !todo.done } // retorna modificación
                    : todo // en caso de no hacer nada
            );
        

        case 'toogle-old':
            return state.map( todo => {
                // evaluo 
                if ( todo.id  === action.payload ) {
                    // este elemento es el que hay que cambiar
                    return {

                        ...todo,
                        done: !todo.done

                    }
                }else{
                    return todo;
                }
            })

        default:
            return state;
    }


}

// filter regresa un nuevo arreglo que cumplan una condición
// map : barre cada uno de los elementos del arreglo y debe de retornar un valor
