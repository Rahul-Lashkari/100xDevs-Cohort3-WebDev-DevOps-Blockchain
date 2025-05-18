import { useState, useEffect } from "react";

function useFetch(url, interval) {
    const [finalData, setFinalData] = useState({});

    const [loading, setLoading] = useState(true);

    async function getDetails() {
        try {
            let response = await fetch(url);

            let json = await response.json();

            setFinalData(json);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getDetails();

        if (interval) {
            const fetchInterval = setInterval(() => {

                getDetails();
            }, interval); 

            return () => clearInterval(fetchInterval); 
        }
    }, [url, interval]); 

    return { finalData, loading };
}

export default useFetch;
