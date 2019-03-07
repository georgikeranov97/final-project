// import { ADD_NEW_USER } from '../actions/actionTypes';
// import userStorage from './store';

// // const initialState =  {
// //     users: [
// //         {id: 1, username: 'Gosho', email: 'gosho@user.com', password: '123456' },
// //     ]
// // };
// const initialState = userStorage;

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case ADD_NEW_USER: {
//             return {...state, users: [...state.users, action.user]};
//         }
//         default: return state;
//     }
// }

// export default reducer;

import { 
    ADD_NEW_USER, 
    USER_LOGIN,
    USER_LOGOUT,
    CURRENT_USER } from '../actions/actionTypes';

const initialState = {
    users: [
        {
            userId: 1,
            username: 'Pesho',
            email: 'pesho@abv.bg',
            password: 'Pesho123456',
            followed: [],
            categories: [],
        },
        {
            userId: 2,
            username: 'Tisho',
            email: 'tisho@abv.bg',
            password: 'Tisho1232456',
            followed: [],
            categories: [],
        },
        {
            userId: 3,
            username: 'Gosho',
            email: 'gesho@abv.bg',
            password: 'Gosho123456',
            followed: [],
            categories: [],
        },
        {
            userId: 4,
            username: 'Penka',
            email: 'penka@abv.bg',
            password: 'Penka123456',
            followed: [],
            categories: [],
        },
        {
            userId: 5,
            username: 'Stanka',
            email: 'stanka@abv.bg',
            password: 'Stanka123456',
            followed: [],
            categories: [],
        },
    ],
    currentUser: {
        user : (JSON.parse(sessionStorage.getItem('loggedUser'))) ? JSON.parse(sessionStorage.getItem('loggedUser')) : null,
        isLogged : false
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_USER: 
            return {...state, users: [...state.users, action.newUser]}
        
        case USER_LOGIN:
            sessionStorage.setItem('loggedUser', JSON.stringify(action.user));
            const isLogged = true;
            const users = [...state.users];
            return {...state, users, currentUser: {...state.currentUser, user: action.user, isLogged}};

        default: return state;
    }
}

export default reducer;