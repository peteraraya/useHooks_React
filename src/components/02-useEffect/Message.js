import React, { useEffect, useState } from 'react';

const Mesaage = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const { x, y } = coords;

    // Obtendremos las cordenadas de la pantalla cuando este componente este abierto

    useEffect(() => {

        // Precaución para evitar multiples listener
        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            console.log(coords)
            setCoords(coords);
        }

        window.addEventListener('mousemove', mouseMove);

        // console.log('componente montado !!!');
        return () => {
            // console.log('componente desmontado !!!');
            window.removeEventListener('mousemove', mouseMove); // evito duplicidad de listener
        }
    }, [])

    return (
        <>
            <h3>Eres genial!</h3>
            <p>
                x: {x} y:{y}
            </p>
        </>
    )
}

export default Mesaage


/**
 *
 */