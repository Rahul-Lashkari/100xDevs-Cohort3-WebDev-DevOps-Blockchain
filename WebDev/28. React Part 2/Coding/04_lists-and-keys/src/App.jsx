function App() {
    const todos = [
        { title: "Get out of bed", done: true },
        { title: "Brush teeth", done: false },
        { title: "Go to the gym", done: false },
        { title: "Eat breakfast", done: true },
    ];

    const items = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
    ];

    return (
        <div>
            {todos.map((todo, index) => (
                <Todo key={index} title={todo.title} done={todo.done} />
            ))}

            <ItemList items={items} />
        </div>
    );
}

function Todo({ title, done }) {
    return (
        <div>
            {title} - {done ? "Done" : "Not done"}
        </div>
    );
}

const ItemList = ({ items }) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

export default App;
