export default (state = {userUnivName: null}, action) => {
    switch (action.type) {
        case 'FETCH_UNIV':
            return {...state, userUnivName: action.payload.name}
        case 'FETCH_UNIVS':
            return { ...action.payload }
        default:
            return state;
    }
}