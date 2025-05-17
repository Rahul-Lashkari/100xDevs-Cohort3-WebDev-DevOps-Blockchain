import { useState } from "react";

function App() {
    const [bulbOn, setBulbOn] = useState(true);

    function toggleBulb() {
        setBulbOn(!bulbOn);
    }

    return (
        <div>
            <Light bulbOn={bulbOn} toggleBulb={toggleBulb} />
        </div>
    );
}

function Light({ bulbOn, toggleBulb }) {
    return (
        <div>
            <LightBulb bulbOn={bulbOn} />

            <LightSwitch toggleBulb={toggleBulb} />
        </div>
    );
}

function LightBulb({ bulbOn }) {
    return (
        <div>{bulbOn ? "Bulb is on" : "Bulb is off"}</div>
    );
}

function LightSwitch({ toggleBulb }) {
    return (
        <div>
            <button onClick={toggleBulb}>Toggle the Bulb</button>
        </div>
    );
}

export default App;
