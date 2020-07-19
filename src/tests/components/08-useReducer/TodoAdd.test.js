import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

import '@testing-library/jest-dom';

describe('Pruebas en <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd 
            handleAddTodo = { handleAddTodo  }
        />
    )
    
    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('No debe de llamar handleTodo', () => {
        
        // hago la referencia a una función
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(0);

    });
    
    test('debe de llamar la función handleAddTodo', () => {
        // debe de llamarse con un argumento 

        // 1 primero declaramos el valor que queremos cambiar
        const value ='Aprender React';

        wrapper.find('input').simulate('change',{
            target:{
                value,
                name:'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault() {} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);

        // pero necesito el objeto para evualar
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) );
        expect( handleAddTodo ).toHaveBeenCalledWith({ 
                id:   expect.any(Number),
                desc: value,
                done: false
        });

        // despues de haber ejecutado todo esto el string debio haberse borrado - uso de reset()
        expect ( wrapper.find('input').prop('value')).toBe('');
    });
    
    
})
