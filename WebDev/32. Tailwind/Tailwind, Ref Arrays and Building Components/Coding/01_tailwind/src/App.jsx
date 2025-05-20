import FlexExample from "./components/FlexExample";
import GridExample from "./components/GridExample";
import ResponsivenessExample from "./components/ResponsivenessExample";

function App() {
    return (
        <>
            <div className="bg-blue-200">Hi</div>

            <div className="bg-red-500">Hi</div>

            <div className="h-24 w-24 bg-purple-800 mt-3 ml-3 rounded-md border-2 border-red-600"></div>

            <FlexExample />

            <GridExample />

            <ResponsivenessExample />
        </>
    );
}

export default App;
