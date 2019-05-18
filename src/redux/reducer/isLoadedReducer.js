const isLoadedReducer = (isLoaded = false, action) => {
    if (action.type === 'START_GET') return false;
    if (action.type === 'GET_SUCCESS' || action.type === 'GET_ERROR') return true;
    return isLoaded;
};

export default isLoadedReducer;
