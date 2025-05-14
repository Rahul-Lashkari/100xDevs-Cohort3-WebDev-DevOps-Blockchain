const style = {
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    margin: 10,
};

function ProfileComponent() {
    return (
        <div style={style}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                    src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
                    style={{ width: 60, height: 60, borderRadius: 60, marginBottom: 10 }}
                />

                <b>Harkirat Singh</b>
                <span>Working with WebRTC</span>
            </div>

            <div style={{ fontSize: 14, marginTop: 25 }}>
                <p style={{display: "flex", justifyContent: "space-between"}}>
                    <span>Profile Viewers </span>
                    <span style={{color: "blue"}}>41,903</span>
                </p>
                <p style={{display: "flex", justifyContent: "space-between"}}>
                    <span>Post Impressions</span>
                    <span style={{color: "blue"}}>1,313</span>
                </p>
            </div>
        </div>
    );
}

export default ProfileComponent;
