import { createStore } from 'redux';

const initialState = {
    navigation: null
};

const reducer = (state = initialState, action) => {
    if (action.type === 'NAVIGATION') return { navigation: action.navigation };
    return state;
};

const store = createStore(reducer);
export default store;
