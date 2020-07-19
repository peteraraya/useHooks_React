import React from 'react';

import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../../fixtures/demoTodos';

describe('Pruebas en <TodoLis />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    
    const wrapper = shallow(
        <TodoList 
            todos = { demoTodos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />)
    
    test('debe de mostrase correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de tener dos o cantidad de elementos que tenga <TodoListItem />', () => {
       console.log( wrapper.find('TodoListItem').length );
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );

        console.log(wrapper.find('TodoListItem').at(0).prop('handleDelete'));

        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );
    });

    test('debe de mostrase correctamente', () => {
       
    });


})
