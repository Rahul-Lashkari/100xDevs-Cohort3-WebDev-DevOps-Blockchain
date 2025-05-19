import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

import { networkAtom, jobsAtom, notificationsAtom, messagingAtom } from "./atoms";

function App() {
    return (
        <RecoilRoot>
            <MainApp />
        </RecoilRoot>
    );
}

function MainApp() {
    const networkNotificationCount = useRecoilValue(networkAtom);
    const jobsAtomCount = useRecoilValue(jobsAtom);
    const notificationsAtomCount = useRecoilValue(notificationsAtom);
    const messagingAtomCount = useRecoilValue(messagingAtom);

    // const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);

    return (
        <>
            <button>Home</button>

            <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>

            <button>Jobs ({jobsAtomCount})</button>

            <button>Messaging ({messagingAtomCount})</button>

            <button>Notifications ({notificationsAtomCount})</button>

            <ButtonUpdator />
        </>
    );
}

function ButtonUpdator() {
    const setMessagingAtomCount = useSetRecoilState(messagingAtom);

    return (
        <button
            onClick={() => {
                setMessagingAtomCount((count) => count + 1);
            }}
        >
            Me
        </button>
    );
}

export default App;
