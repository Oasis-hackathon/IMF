export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_CODE':
            return {...state, authCode: action.payload.authCode};
        default:
            return state;
    }
}