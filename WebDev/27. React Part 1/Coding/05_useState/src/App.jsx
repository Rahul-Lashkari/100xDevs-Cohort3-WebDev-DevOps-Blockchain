import { useState } from "react";

function App() {
    return (
        <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>

            <Counter />
            
            <ToggleMessage />
            <ToggleMessage />
        </div>
    );
}

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ margin: '0px 10px' }}>
            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

const ToggleMessage = () => {
    const [notification, notificationCount] = useState(0);

    function toggle() {
        notificationCount(notification + 1);
    }

    return (
        <div>
            <button onClick={toggle} style={{ padding: 10, margin: 10, cursor: "pointer" }}>
                Increase Count
            </button>

            {notification}
        </div>
    );
};

export default App;