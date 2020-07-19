import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../../fixtures/demoTodos';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Pruesbas en <TodoApp />', () => {
    
    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn();

    test('debe mostrarse correctamente', () => {
        

        expect( wrapper ).toMatchSnapshot();
            
    });
    
    test('Debe de agregar un TODO', () => {
        
        const wrapper = mount( <TodoApp />);

        act( () => {  
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
        });

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp (2)');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
    });

    test('debe eliminar un TODO', () => {
        
        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');

    })
    

    

})



// shalllow es mas basico y mount es más espesifico