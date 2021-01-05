export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_OTHER_PRO':
            return {...action.payload};
        default:
            return state;
    }
}