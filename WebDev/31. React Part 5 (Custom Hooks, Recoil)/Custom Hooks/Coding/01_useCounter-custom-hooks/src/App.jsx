import { useState } from "react";

// Custom Hook - useCounter
function useCounter() {
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
    }

    return { count, increaseCount };
}

function App() {

    return (
        <div>
            <Counter />

            <Counter />
        </div>
    );
}

function Counter() {
    const { count, increaseCount } = useCounter();

    return (
        <div>
            <button onClick={increaseCount}>Increase {count}</button>
        </div>
    );
}

export default App;
