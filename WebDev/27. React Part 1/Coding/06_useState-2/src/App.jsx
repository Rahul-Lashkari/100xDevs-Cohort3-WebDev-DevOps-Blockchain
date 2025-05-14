import { useState } from "react";

import { PostComponent } from "./PostComponent";

function App() {
    const [posts, setPosts] = useState([]);

    function addPost() {
        setPosts([...posts, {
            name: "harkirat",
            subtitle: "10000 followers",
            time: "2m ago",
            image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
            description: "What to know how to win big? Check out how these folks won $6000 in bounties.",
      }]);
    }

    const postComponents = posts.map((post) => (
        <PostComponent
            name={post.name}
            subtitle={post.subtitle}
            time={post.time}
            image={post.image}
            description={post.description}
        />
    ));

    return (
        <div style={{ background: "#dfe6e9", minHeight: "100vh" }}>
            <button onClick={addPost} style={{
                padding: 10,
                margin: 10,
                borderRadius: 5,
                cursor: "pointer",
            }}>Add post</button>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>{postComponents}</div>
            </div>
        </div>
    );
}

export default App;
