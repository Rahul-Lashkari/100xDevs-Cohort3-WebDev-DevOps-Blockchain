import { useState, Component } from "react";

function App() {
    return (
        <div>
            <ClassCounter />

            <FunctionalCounter />
        </div>
    );
}

class ClassCounter extends Component {
    state = { count: 0 };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>

                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

const FunctionalCounter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount((count) => count + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>

            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default App;
