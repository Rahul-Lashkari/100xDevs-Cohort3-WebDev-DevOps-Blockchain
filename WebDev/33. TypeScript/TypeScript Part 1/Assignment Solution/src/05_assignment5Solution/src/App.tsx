import Todo, { TodoType } from "./Todo";

function App() {
    const todos: TodoType[] = [
        { title: "Attend 100xDevs Class", description: "In this class we will learn TypeScript.", done: false },
        { title: "Go to Gym", description: "Let's go gym guys and build your Muscles", done: true },
        { title: "Write Code", description: "Clean up and improve code quality.", done: false },
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h1>Todo List</h1>

            {todos.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))}
        </div>
    );
};

export default App;