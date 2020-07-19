import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';
import '@testing-library/jest-dom';

describe('Pruebas en <HomeScreen />', () => {

    const user ={
        name:'Pedro',
        email:'piteraraya@gmail.com'
    }
    
    const wrapper = mount(
        <UserContext.Provider  value={{
            user
        }}>
            <HomeScreen /> 
        </UserContext.Provider>
    
    );

    test('debe de mostrarse correctamente', () => {
    
        expect( wrapper ).toMatchSnapshot();
    
    });



    
})

// el shallow hace una renderización solo del componente principal que estoyy probando

// mount nos sirve para renderizar todo en reemplazo de shallow