import React from 'react';
import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import '@testing-library/jest-dom';
import { AppRouter } from '../../../components/09-useContext/AppRouter';

describe('Pruebas en <RouterApp />', () => {
    
    const user = {
        id:1,
        name:'Peter'
    }


    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter />

        </UserContext.Provider>
    
    );

    test('debe de funcionar correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });
    
})

