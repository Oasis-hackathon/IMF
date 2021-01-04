const INITIAL_STATE = {
    id: null,
    isSignedIn: false,
    userId: null,
    userImagePath: null,
    userName: null,
    univId: null,
    majorName: null,
    phone: null,
    bankAccount: null,
    address: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, isSignedIn: true, ...action.payload };
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false, ...INITIAL_STATE };
        case 'EDIT_INFO':
            return {...state, ...action.payload}
        default:
            return state;
    }
}