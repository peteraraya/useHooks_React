const { renderHook, act } = require("@testing-library/react-hooks")
const { useCounter } = require("../../hooks/useCounter")

describe('Pruebas en useCounter', () => {
    
    test('debe de retornar valores por defecto', () => {
        
        const { result } = renderHook( () => useCounter() );

        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');

    })
    
    test('debe de tener el counter en 100', () => {

        const { result } = renderHook(() => useCounter(100));

        expect( result.current.counter ).toBe(100);
    
    })

    test('debe de incrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100));

        const { increment } = result.current;

        act (()=>{
            // incremento para la prueba
            increment();
        });

        const { counter } = result.current;

        expect( counter ).toBe(101);

    })

    test('debe de decrementar y establecer el valor en 100', () => {

        const { result } = renderHook(() => useCounter(100));

        const { decrement, reset } = result.current;

        act(() => {
            // decremento para la prueba
            decrement();
            decrement(); // solo se ejecuta una vez
            reset();
        });

        const { counter } = result.current;

        expect( counter ).toBe(100);

    })

})
