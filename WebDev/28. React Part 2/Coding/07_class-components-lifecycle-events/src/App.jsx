import React from "react";

function App() {
    return (
        <div>
            <MyComponent />
        </div>
    );
}

class MyComponent extends React.Component {
    constructor(props) {
        console.log("Constructor"); 
        super(props); 
        this.state = { count: 0 }; 
    }

    componentDidMount() {
        console.log("Component Mounted"); 
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Updated"); 
    }

    componentWillUnmount() {
        console.log("Component will Unmount"); 
    }

    render() {
        console.log("Render");

        return (
            <div>
                <p>Count: {this.state.count}</p>

                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
            </div>
        );
    }
}

export default App;
