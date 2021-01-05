export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_MYUNIV_PRO':
            return {...action.payload};
        default:
            return state;
    }
}