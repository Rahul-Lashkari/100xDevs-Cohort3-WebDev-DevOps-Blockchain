import React from "react";

class ErrorBoundary extends React.Component {
    
    constructor(props) {
        super(props); 
        this.state = { hasError: false }; 
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ background: "red", borderRadius: 10, padding: 20 }}>
                    <h2>Something went wrong.</h2>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
