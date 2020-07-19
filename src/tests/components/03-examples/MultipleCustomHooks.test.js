import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import '@testing-library/jest-dom';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
// Pasa por un mock : no me interesa la implementación solo los resultados, pero evita llamadas 
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks />', () => {
    
    // l o denimos aqui el useCounter si no va a cambiar

    useCounter.mockReturnValue({
        counter:10,
        incremente: ()=> {}
    })


    test('debe de mostrarse correctamente', () => {

        // data por defecto luego de utilizar mock
        useFetch.mockReturnValue({
            data:null,
            loading:true,
            error:null
        });
        
        const wrapper = shallow(<MultipleCustomHooks /> );

        expect( wrapper ).toMatchSnapshot();
    
    });

    test('debe mostrar la información', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Pedro',
                quote:'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        // Busquedas en el wrapper
        expect( wrapper.find('.alert').exists()).toBe(false);
        expect( wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect( wrapper.find('footer').text().trim()).toBe( 'Pedro' );

        console.log(wrapper.html());
    })
    

})

/**
 * La ventaja de trabajar con un snapshot es que le saca una fotografia actual del componente
 * asi el dia de mañana alguien borra ALGO      
 * Es para decir asi esta mi componenteqiero que se mantenga así
 */
