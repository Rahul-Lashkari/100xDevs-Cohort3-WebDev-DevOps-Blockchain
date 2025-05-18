import { useState, useEffect, memo } from "react";

function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((c) => c + 1); 
        }, 3000);

        return () => clearInterval(interval);
    }, []); 

    return (
        <div>
            <CurrentCount count={count} />

            <Increase setCount={setCount} />

            <Decrease setCount={setCount} />
        </div>
    );
}

const CurrentCount = memo(function({ count }) {

    return (
        <h1>{count}</h1> 
    );
});

const Decrease = memo(function({ setCount }) {
    function decrease() {
        setCount((c) => c - 1); 
    }

    return (
        <button onClick={decrease}>Decrease</button>
    ); 
});

const Increase = memo(function({ setCount }) {
    function increase() {
        setCount((c) => c + 1); 
    }

    return (
        <button onClick={increase}>Increase</button>
    ); 
});

export default App;
