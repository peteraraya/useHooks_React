import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';
import '@testing-library/jest-dom';

describe('Pruebas en <HookApp />', () => {
    
    test('debe mostrarse correctamente', () => {
        
        const wrapper = shallow( <HookApp /> );

        // hacemos la prueba
        expect( wrapper ).toMatchSnapshot();

    })
    
})
