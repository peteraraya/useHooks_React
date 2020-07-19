import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';


import '@testing-library/jest-dom';

describe('Puesbas en <RealExampleRef />', () => {
    
    const wrapper = shallow(<RealExampleRef /> );

    test('debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
        //  si existe  al momento de crearse este no debería existir
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false); 
    });

    test('debe mostrarse el componente <MultipleCustomHooks />', () => {

        // simulando click
        wrapper.find('button').simulate('click');

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true); 
    })
    
    
})
