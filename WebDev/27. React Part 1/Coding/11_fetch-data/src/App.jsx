import { useState, useEffect } from "react";

function App() {
    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                const data = await response.json();

                setUsers(data);
            } catch (error) { 
                console.error("Error fetching data:", error);
            } finally { 
                setLoading(false);
            }
        };

        fetchData();
    }, []); 

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id} style={{ margin: 10 }}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>City: {user.address.city}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
