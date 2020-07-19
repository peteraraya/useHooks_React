const { todoReducer } = require("../../../components/08-useReducer/todoReducer");
const { demoTodos } = require("../../../fixtures/demoTodos");
const { RealExampleRef } = require("../../../components/04-useRef/RealExampleRef");

describe('Pruebas en mi todoReducer', () => {
    

    test('debe de retornar el estado por defecto', () => {
        
        const state = todoReducer(demoTodos, {});

        expect ( state ).toEqual( demoTodos );
    });

    test('debe de agregar un TODO', () => {
        
        const newTodo = {
            id:3,
            desc:'Aprender Vue',
            done:false
        };


        const action = {
            type: 'add',
            payload: newTodo
        };
        
        
        const state = todoReducer(demoTodos, action);

        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [...demoTodos, newTodo] );


    });

    test('debe de borrar un TODO', () => {

        //action.payload  = ID del TODO

        const action = {
            type: 'delete',
            payload: 1
        };

        const state = todoReducer( demoTodos, action );

        expect ( state.length ).toBe( 1 );
        expect ( state ).toEqual( [demoTodos[1]] );

    });

    test('debe de hacer el TOOGLE del TODO', () => {

        //action.payload  = ID del TODO

        const action = {
            type: 'toggle',
            payload: 1
        };

        const state = todoReducer(demoTodos, action);

        expect( state[0].done ).toBe(true); // primer elemento .done este en true 
        expect( state[1] ).toEqual( demoTodos[1] );

    });
    
})


// los reduces siempre devuelven un estado

// siempre voy a estar ocupando una data ficticia de pruebas ( fixtures/demoTodos) 