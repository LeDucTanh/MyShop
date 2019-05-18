const reducer = (navigation = null, action) => {
    if (action.type === 'NAVIGATION') return { navigation: action.navigation };
    return navigation;
};

export default reducer;
