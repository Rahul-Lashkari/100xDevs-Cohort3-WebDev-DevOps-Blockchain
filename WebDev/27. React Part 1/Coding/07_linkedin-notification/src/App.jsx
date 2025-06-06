import { useState } from "react";

function App() {
    const [count, setCount] = useState(1);

    function increaseCount() {
        setCount(count + 1);
    }

    return (
        <div style={{ background: "#dfe6e9", minHeight: "100vh", padding: 20 }}>
            <div
                style={{
                    background: "red",
                    borderRadius: 30,
                    width: 30,
                    height: 30,
                    paddingLeft: 10,
                    paddingTop: 5,
                    position: "relative",
                    left: 12,
                }}
            >
                {count}
            </div>

            <img
                src="https://cdn-icons-png.flaticon.com/512/472/472371.png"
                style={{
                    width: 30,
                    height: 30,
                }}
            />

            <button
                onClick={increaseCount}
                style={{
                    marginLeft: 10,
                    padding: 10,
                    borderRadius: 5,
                    cursor: "pointer",
                }}
            >
                Increase the Count
            </button>
        </div>
    );
}

export default App;
