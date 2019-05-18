import saveCart from '../../api/saveCart';

const cartsReducer = (carts = [], action) => {
    if (action.type === 'GET_CART') return action.carts;
    if (action.type === 'ADD_CART') {
        if (carts.length === 0) {
            return [{ product: action.product, quantity: 1 }];
        }
        const index = carts.findIndex(e => e.product.id === action.product.id);
        if (index === -1) {
            carts.concat({ product: action.product, quantity: 1 });
            saveCart(carts);
            return carts;
        } 
        return increaseQuantity(carts, action.product.id);  
    }
    return carts;
};

function increaseQuantity(carts, id) {
    const newCarts = carts.map(e => {
        if (e.product.id !== id) return e;
        return { product: e.product, quantity: e.quantity + 1 };
    });
    saveCart(newCarts);
    return newCarts;
}

export default cartsReducer;
