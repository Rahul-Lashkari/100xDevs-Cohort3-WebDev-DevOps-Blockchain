import { useState, useEffect } from "react";

function Notifications() {
    
    const [notificationCount, setNotificationCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNotificationCount((prevCount) => prevCount + 1);
        }, 5000); 

        return () => clearInterval(interval);
    }, []); 

    return (
        <div style={{ minHeight: "100vh", padding: 20 }}>
            <div
                style={{
                    background: "red",
                    borderRadius: 30,
                    width: 30,
                    height: 30,
                    paddingLeft: 10,
                    paddingTop: 5,
                    position: "relative",
                    left: 12,
                }}
            >
                {notificationCount}
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/472/472371.png"
                    style={{
                        width: 30,
                        height: 30,
                    }}
                />

                <p>notifications</p>
            </div>
        </div>
    );
}

export default Notifications;
