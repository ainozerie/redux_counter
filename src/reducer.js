const reducer = (state = {counter: 0}, action) => {
    switch (action.type) {
        case 'ADD':
            return {...state, counter: state.counter + action.payload};
        case 'RESET':
            return {...state, counter: action.payload};
        case 'REMOVE':
            return {...state, counter: state.counter - action.payload};
        default:
            return {...state, counter: 0};
    }
}

export default reducer;