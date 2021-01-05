export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            return {...action.payload[0]}
        case 'FETCH_PRODUCTS':
            return { ...action.payload }
        case 'FETCH_ALL_PRODUCTS':
            return { ...action.payload }
        default:
            return state;
    }
}