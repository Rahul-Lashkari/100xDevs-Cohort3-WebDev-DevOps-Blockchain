import { useState } from "react";

function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}

function Counter() {
    let [count, setCount] = useState(0);

    return (
        <div>
            <CurrentCount count={count} />

            <Incrase setCount={setCount} />

            <Decrease setCount={setCount} />
        </div>
    );
}

function CurrentCount({ count }) {

    return (
        <h3>Count: {count}</h3>
    );
}

function Decrease({ setCount }) {
    function decrease() {
        setCount((c) => c - 1);
    }

    return (
        <button onClick={decrease}>Decrease</button>
    );
}

function Incrase({ setCount }) {
    function increase() {
        setCount((c) => c + 1); // Time complexity: O(1), Space complexity: O(1)
    }

    return (
        <button onClick={increase}>Increase</button>
    ); 
}

export default App;
