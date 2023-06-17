import { configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return { ...state, counter: state.counter + 1 };
        default:
            return state;
    }
};

const store = configureStore({ reducer });
export default store;
