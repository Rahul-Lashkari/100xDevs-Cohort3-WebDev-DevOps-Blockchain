const style = {
    width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    margin: 10,
};

export function PostComponent({ name, subtitle, time, image, description }) {
    return (
        <div style={style}>
            <div style={{ display: "flex" }}>
                <img src={image} style={{ width: 40, height: 40, borderRadius: 40 }} />
                <div style={{ fontSize: 14, marginLeft: 10 }}>
                    <b>{name}</b>
                    <div>{subtitle}</div>

                    {time !== undefined ? (
                        <div style={{ display: "flex" }}>
                            <div>{time}</div>
                            <img
                                src="https://imgs.search.brave.com/HR4XL7q_XpiQSqNwAl17jYkdNBrGw-fKdXxJlCr-uls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MDc3ODM3Ni9waG90/by9jbG9jay02LW9j/bG9jay5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VTZKUXI5/UFdPYmVuY2lOMHVj/QkgycXJFeWd5WlY4/VUdDem1UQ1pVRnVE/cz0"
                                style={{ width: 15, height: 15 }}
                            />
                        </div>
                    ) : null}
                </div>
            </div>

            <div style={{ fontSize: 14, marginTop: 5 }}>{description}</div>
        </div>
    );
}
