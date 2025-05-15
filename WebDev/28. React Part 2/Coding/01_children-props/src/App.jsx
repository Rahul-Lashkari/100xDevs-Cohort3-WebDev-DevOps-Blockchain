function App() {
    return (
        <div style={{ display: "flex" }}>
            <Card>
                <div style={{ color: "green" }}>
                    What do you want to post
                    <br />
                    <br />
                    <input type="text" />
                </div>
            </Card>

            <Card>
                <h2>Card Title</h2>
                <p>This is some content inside the card.</p>
            </Card>

            <Card>
                <h2>Another Card</h2>
                <textarea type="text"></textarea>
                <p>This card has different content!</p>
            </Card>
        </div>
    );
}

function Card({ children }) {
    return (
        <div
            style={{
                background: "white",
                borderRadius: 10,
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
        >
            {children}
        </div>
    );
}

export default App;




// Alternative code with different Card usage pattern:

// function App() {
//     return (
//         <div style={{ display: "flex" }}>
//             <Card
//                 innerContent={
//                     <div style={{ color: "green" }}>
//                         What do you want to post
//                         <br />
//                         <br />
//                         <input type="text" />
//                     </div>
//                 }
//             />

//             <Card innerContent="Hi there" />
//         </div>
//     );
// }

// function Card({ innerContent }) {
//     return (
//         <div
//             style={{
//                 background: "black",
//                 color: "white",
//                 borderRadius: 10,
//                 padding: "10px",
//                 margin: "10px",
//                 boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
//             }}
//         >
//             {innerContent}
//         </div>
//     );
// }

// export default App;
//
