import { useState, useEffect } from "react";

function App() {
    const [showTimer, setShowTimer] = useState(true);

    useEffect(() => {
        setInterval(() => {
            setShowTimer((currentValue) => !currentValue);
        }, 5000);
    }, []); 

    return (
        <div style={{ margin: 20, textAlign: "center" }}>
            <h1 style={{ color: "purple" }}>Countdown App</h1>

            {
                showTimer && <Timer />
            }
        </div>
    );
}

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const clock = setInterval(() => {
            console.log("Mounted");

            setSeconds((prev) => prev + 1);
        }, 1000);

        return function () {
            clearInterval(clock);
        };
    }, []); 

    return <h3>{seconds} seconds elapsed</h3>;
}

export default App;
