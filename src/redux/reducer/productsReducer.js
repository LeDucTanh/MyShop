const productsReducer = (products = [], action) => {
    if (action.type === 'GET_SUCCESS') return action.products;
    if (action.type === 'GET_ERROR') return [];
    return products;
};

export default productsReducer;
