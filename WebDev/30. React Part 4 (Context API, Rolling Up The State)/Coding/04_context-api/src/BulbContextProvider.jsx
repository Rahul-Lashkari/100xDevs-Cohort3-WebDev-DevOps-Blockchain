import { createContext, useState } from "react";

const BulbContext = createContext();

function BulbContextProvider({ children }) {
    const [bulbOn, setBulbOn] = useState(true);

    return (
        <BulbContext.Provider
            value={{
                bulbOn,
                setBulbOn,
            }}
        >
            {children}
        </BulbContext.Provider>
    );
}

export { BulbContextProvider, BulbContext };
