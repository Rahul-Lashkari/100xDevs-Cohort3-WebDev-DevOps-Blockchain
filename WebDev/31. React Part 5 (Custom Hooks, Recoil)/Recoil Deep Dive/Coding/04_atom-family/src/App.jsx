import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

import { todosAtomFamily } from "./atoms";

import { useEffect } from "react";

function App() {

    return (
        <RecoilRoot>
            <Todo id={1} />
            <Todo id={2} />
            <Todo id={2} />

            <UpdatorComponent />
        </RecoilRoot>
    );
}

function UpdatorComponent() {
    const updateTodo = useSetRecoilState(todosAtomFamily(2));

    useEffect(() => {
        setTimeout(() => {
            updateTodo({
                id: 2,
                title: "Updated Title",
                description: "Updated Description"
            })
        }, 5000);
    });

    return <></>;
}

function Todo({ id }) {
    const currentTodo = useRecoilValue(todosAtomFamily(id));

    return (
        <>
            {currentTodo.title}
            {currentTodo.description}

            <br /> 
        </>
    );
}

export default App;
