import ErrorBoundary from "./ErrorBoundary";

const App = () => {
    return (
        <div>
            <ErrorBoundary>
                <Card1 /> 
            </ErrorBoundary>

            <ErrorBoundary>
                <Card2 /> 
            </ErrorBoundary>

            <Card3 /> 
        </div>
    );
};

function Card1() {
    throw new Error("Error While Rendering Card 1");

    return (
        <div style={{ background: "red", borderRadius: 10, padding: 20 }}>
            <h2>Card 1</h2>
        </div>
    )
}

function Card2() {
    return (
        <div style={{ background: "red", borderRadius: 10, padding: 20, marginTop: 20 }}>
            <h2>Card 2</h2>
        </div>
    );
}

function Card3() {
    return (
        <div style={{ background: "red", borderRadius: 10, padding: 20, marginTop: 20 }}>
            <h2>Card 3</h2> 
        </div>
    );
}

export default App;
