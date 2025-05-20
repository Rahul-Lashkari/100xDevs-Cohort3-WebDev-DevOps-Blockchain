import { RecoilRoot, useRecoilValueLoadable } from "recoil";

import { todosAtomFamily } from "./atoms";


function App() {
    return (
        <RecoilRoot>
            <Todo id={1} />
            <Todo id={2} />
            <Todo id={2} />
        </RecoilRoot>
    );
}

function Todo({ id }) {
    const todo = useRecoilValueLoadable(todosAtomFamily(id));

    if (todo.state === "loading") {
        return <p>Loading...</p>;
    } else if (todo.state === "hasError") {
        return <p>Error while fetching data from backend : {todo.contents.message}</p>;
    } else if (todo.state === "hasValue") {
        return (
            <>
                {todo.contents.title}
                {todo.contents.description}

                <br />
            </>
        );
    }
}

export default App;


/*
// Another way to handle errors using ErrorBoundary and Suspense in React
function App() {
    return (
        <RecoilRoot>
            <Suspense fallback={<p>Loading...</p>}>
                <ErrorBoundary>
                    <Todo id={1} />
                    <Todo id={2} />
                    <Todo id={2} />
                    </Suspense>
                </ErrorBoundary>
        </RecoilRoot>
    );
}
*/