import { startAsyncValidation } from "redux-form"

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            return { ...state, productInfo: action.payload }
        case 'FETCH_PRODUCTS':
            return { productInfo: action.payload  }
        case 'FETCH_ALL_PRODUCTS':
            return { productInfo: action.payload  }
        case 'FETCH_OPTIONS':
            return {...state, options: action.payload}
        default:
            return state;
    }
}