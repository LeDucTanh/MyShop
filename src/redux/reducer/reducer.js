import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import typesReducer from './typesReducer';
import isLoadedReducer from './isLoadedReducer';
import errorReducer from './errorReducer';
import navigationReducer from './navigationReducer';
import cartsReducer from './cartsReducer';

const reducer = combineReducers({
    products: productsReducer,
    types: typesReducer,
    carts: cartsReducer,
    isLoaded: isLoadedReducer,
    error: errorReducer,
    navigation: navigationReducer
});

export default reducer;
