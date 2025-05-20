import { RecoilRoot, useRecoilValue } from "recoil";

import { networkAtom, jobsAtom, notificationsAtom, messagingAtom, totalNotificationsSelector } from "./atoms";

import { useMemo } from "react";

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

    /*
    const totalNotificationsCount = useMemo(() => {
        return networkNotificationCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
    }, [networkNotificationCount, jobsAtomCount, notificationsAtomCount, messagingAtomCount]);  
    */

    const titalNotificationsCount = useRecoilValue(totalNotificationsSelector);

    return (
        <>
            <button>Home</button>

            <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>

            <button>Jobs ({jobsAtomCount})</button>

            <button>Messaging ({messagingAtomCount})</button>

            <button>Notifications ({notificationsAtomCount})</button>

            <button>Me {titalNotificationsCount}</button>
        </>
    );
}

export default App;
