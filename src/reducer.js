const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.payload;
        case 'RESET':
            return action.payload;
        case 'REMOVE':
            return state - action.payload;
        default:
            return 0;
    }
}

export default reducer;