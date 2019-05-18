const typesReducer = (state = [], action) => {
    if (action.type === 'GET_SUCCESS') return action.types;
    if (action.type === 'GET_ERROR') return [];
    return state;
};

export default typesReducer;
