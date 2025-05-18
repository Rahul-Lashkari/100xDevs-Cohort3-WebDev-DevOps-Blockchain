import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay); 

        return () => {
            clearTimeout(handler); 
        };
    }, [value, delay]); 

    return debouncedValue;
};

export default useDebounce;





// import { useEffect, useRef } from "react"

// function useDebounce(originalFn) {
//     const currentClock = useRef();

//     const fn = () => {
//         clearTimeout(currentClock.current);
//         currentClock.current = setTimeout(originalFn, 1000);
//     }

//     useEffect(() => {
//         fn();
//     }, []);

//     return fn;
// }

// export default useDebounce;