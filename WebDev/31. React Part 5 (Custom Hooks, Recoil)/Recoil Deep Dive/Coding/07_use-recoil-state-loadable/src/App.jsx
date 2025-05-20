import { RecoilRoot, useRecoilStateLoadable } from "recoil";

import { todosAtomFamily } from "./atoms";
// import { Suspense } from "react";

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
    const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

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