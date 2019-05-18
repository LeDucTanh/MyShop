import initData from '../api/initData';
import getCart from '../api/getCart';

export function getNavigation(navigation) {
    return {
        type: 'NAVIGATION',
        navigation
    };
}

export function startGetData() {
    return {
        type: 'START_GET'
    };
}

export function getSuccess(products, types) {
    return {
        type: 'GET_SUCCESS',
        products,
        types
    };
}

export function getError() {
    return {
        type: 'GET_ERROR'
    };
}

export function getDataThunk() {
    return dispatch => {
        dispatch(startGetData());
        initData()
            .then(resJSON => {
                const { type, product } = resJSON;
                dispatch(getSuccess(product, type));
            })
            .catch(() => dispatch(getError()));
    };
}

export function addCart(product) {
    return {
        type: 'ADD_CART',
        product
    };
}

export function getCartThunk() {
    return dispatch => {
        getCart()
            .then(carts => {
                dispatch({
                    type: 'GET_CART',
                    carts
                });
            });
    };
}
