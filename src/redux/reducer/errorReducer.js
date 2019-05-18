const errorReducer = (error = false, action) => {
    if (action.type === 'GET_ERROR') return true;
    return error;
};

export default errorReducer;
