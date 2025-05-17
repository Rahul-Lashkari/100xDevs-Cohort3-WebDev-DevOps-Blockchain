/*
RecoilRoot: Provides the Recoil state context to the component tree
atom: Used to define a unit of state (atom)
useRecoilValue: Hook to read the value of an atom
useSetRecoilState: Hook to update the value of an atom
useRecoilState: Hook to read and update the value of an atom in one step
*/

import { RecoilRoot, atom, useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

const count = atom({
    key: "countState", 
    default: 0, 
});

function Parent() {
    return (
        <RecoilRoot>
            <Incrase />

            <Decrease />

            <Value />
        </RecoilRoot>
    );
}

function Decrease() {
    const setCount = useSetRecoilState(count);

    return (
        <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    );
}

function Incrase() {
    const setCount = useSetRecoilState(count);

    return (
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>

        // Alternative approaches
        /*
        // Option 1: useRecoilValue reads the value of the 'count' atom, and useSetRecoilState updates the atom
        // This version reads the value and passes it directly to the setter
        const setCount = useSetRecoilState(count); // Setter function to update the 'count' atom value
        const countValue = useRecoilValue(count); // Value of the 'count' atom to be updated
        return (
            // When the button is clicked, the count value is increased by 1 using the setCount function
            <button onClick={() => setCount(countValue + 1)}>
                Increase
            </button>
        );
        */

        /*
        // Option 2: useRecoilState provides both the value and setter in one call
        // This approach simplifies the state management by reading and updating the atom at the same time
        const [countValue, setCount] = useRecoilState(count); // Array destructuring to get the value and setter function
        return (
            // When the button is clicked, the count value is increased by 1 using the setCount function
            <button onClick={() => setCount(countValue + 1)}>
                Increase
            </button>
        );
        */
    );
}

function Value() {
    const countValue = useRecoilValue(count);

    return (
        <p>
            Count: {countValue}
        </p>
    );
}

export default Parent;
