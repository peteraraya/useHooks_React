import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';


describe('Pruebas en useFetch', () => {
    
    test('debe de retornar lainformación por defecto', () => {
        
        const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1') );

        //evaluar el valor por defecto
        const { data, loading, error } = result.current;

        expect( data ).toBe(null);
        expect( loading ).toBe(true);
        expect( error ).toBe(null);
    });

    test('debe de tener la info deseada, loading false y error en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        
        await waitForNextUpdate();

        //evaluar el valor por defecto
        const { data, loading, error } = result.current;

        // aserciones
        expect( data.length ).toBe(1);
        expect( loading ).toBe(false);
        expect( error ).toBe(null);
    })

    test('debe de manejar el error', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'));

        await waitForNextUpdate();

        //evaluar el valor por defecto
        const { data, loading, error } = result.current;
        // aserciones
        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la info');

    })

    
    
})
