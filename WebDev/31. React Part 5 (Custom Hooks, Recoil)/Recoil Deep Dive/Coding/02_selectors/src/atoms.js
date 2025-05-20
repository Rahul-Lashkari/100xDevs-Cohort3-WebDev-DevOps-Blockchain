import { atom, selector } from 'recoil';

export const networkAtom = atom({
    key: 'networkAtom',
    default: 102,
});

export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 0,
});

export const notificationsAtom = atom({
    key: 'notificationsAtom',
    default: 12,
});

export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 0,
});

export const totalNotificationsSelector = selector({
    key: 'totalNotificationsSelector',

    get: ({ get }) => {
        const networkNotificationCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);

        return networkNotificationCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
    }
});