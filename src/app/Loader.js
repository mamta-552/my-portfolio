import React, { useEffect, useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Loader = () => {
    const [color, setColor] = useState('#00FFFF'); // Default to Neon Blue

    useEffect(() => {
        const interval = setInterval(() => {
            setColor(prevColor => prevColor === '#00FFFF' ? '#39FF14' : '#00FFFF');
        }, 1000); // Switch color every second

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);


    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#FFE5EC',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        }}>
            <HashLoader color='#e90da6'/>
        </div>
    );
}

export default Loader;

