import PostComponent from "./PostComponent";
import ProfileComponent from "./ProfileComponent";

function App() {
    return (
        <div style={{ backgroundColor: "#dfe6e9", minHeight: "100vh" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div>
                    <PostComponent />

                    <ProfileComponent />
                </div>
            </div>
        </div>
    );
}

export default App;
