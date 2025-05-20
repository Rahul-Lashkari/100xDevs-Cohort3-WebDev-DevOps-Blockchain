import { atomFamily, selectorFamily } from "recoil";

import axios from "axios";

export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily', 

    default: selectorFamily({
        key: "todoSelectorFamily", 

        get: (id) => async ({ get }) => {
            await new Promise(r => setTimeout(r, 5000));

            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);

            return res.data.todo;
        },
    })
});

/*
export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    default: selectorFamily({
        key: "todoSelectorFamily", 

        get: function (id) {
            return async function ({ get }) {
                const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);

                return res.data.todo;
            }
        },
    })
});
*/


// const todo = atom({
//     key: 'todo',
//     default: selector({
//         key: 'todoSelector',
//         get: async ({ get }) => {
//             const res = await axios.get('https://sum-server.100xdevs.com/todo');
//             return res.data.todo;
//         }
//     })
// })