function App() {
    return (
        <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div>
                    <div>
                        <PostComponent
                            name={"Pikachu"}
                            followerCount={20}
                            time={"2m ago"}
                            image={"https://imgs.search.brave.com/F5OoHgfmJlOgbB00VWzyvvcxuQZk7JOPrCYV51JMmNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/Mzc5NDUyL3Bob3Rv/L2tpdHR5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13UWcw/TXdTcXJxZkkzWHdN/WGREVjhkY2RZMlNH/WVh2YndPdE12cUxX/UWpJPQ"}
                            description={"What to know how to win big? Check out how these folks won $6000 in bounties."}
                        />
                    </div>
                    <div>
                        <div>
                            <PostComponent
                                name={"Nihao"}
                                followerCount={30}
                                time={"3m ago"}
                                image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
                                description={"How to get hired in 2024? I lost my Job in 2023, this is the roadmap I followed to get hired in 2024."}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <PostComponent
                                name={"Cherry"}
                                followerCount={50}
                                time={"18m ago"}
                                image={"https://imgs.search.brave.com/ZACv93qZO57A2RrexnAjJi9CTpejuyu2aIGeB9-2beA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTk0/OTM2My5qcGc"}
                                description={"Here is the roadmap to become a full-stack developer in 2024."}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const style = {
    width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    margin: 10,
};

function PostComponent({ name, followerCount, time, image, description }) {
    return (
        <div style={style}>
            <div style={{ display: "flex" }}>
                <img src={image} style={{ width: 40, height: 40, borderRadius: 40 }} />
                <div style={{ fontSize: 14, marginLeft: 10 }}>
                    <b>{name}</b> 
                    <div>{followerCount} followers</div>
                    <div>{time}</div>
                </div>
            </div>

            <div style={{ fontSize: 14 }}>{description}</div>
        </div>
    );
}

export default App;
