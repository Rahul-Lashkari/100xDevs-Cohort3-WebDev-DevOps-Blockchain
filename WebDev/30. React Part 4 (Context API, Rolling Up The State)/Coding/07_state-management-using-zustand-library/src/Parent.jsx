import useCounterStore from "./useCounterStore";

function Parent() {
    return (
        <div>
            <Incrase />

            <Decrease />

            <Value />
        </div>
    );
}

function Incrase() {
    const increase = useCounterStore((state) => state.increase);

    return (
        <button onClick={increase}>
            Increase
        </button>
    );
}

function Decrease() {
    const decrease = useCounterStore((state) => state.decrease);

    return (
        <button onClick={decrease}>
            Decrease
        </button>
    );
}

function Value() {
    const count = useCounterStore((state) => state.count);

    return (
        <p>
            {count}
        </p>
    );
}

export default Parent;
