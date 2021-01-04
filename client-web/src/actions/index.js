import history from '../history';
import server from '../apis/server';

export const signIn = (userId, userImagePath, userName) => async (dispatch) => {
    const {data} = await server.post('/login/google', {userId, userImagePath, userName});
	dispatch({ type: "SIGN_IN", payload: data});
    history.goBack();
};

export const signOut = () => {
    return {
        type: "SIGN_OUT"
    }
}

// export const fetchUserInfo = (id) => async (dispatch) => {
//     const {data} = await server.get(`/user?id=${id}`);
//     dispatch({ type: "FETCH_USER_INFO", payload: data});
//     console.log(data);
//     history.push('/myInfo');
// }

export const editInfo = (id, formValues) => async dispatch => {
    console.log(formValues);
    const {data} = await server.post("/editinfo", {id, formValues});
    console.log(data)
    dispatch({type: "EDIT_INFO", payload: data})
}

export const fetchUniv = (univId) => async dispatch => {
    const {data} = await server.get(`/univ?id=${univId}`);
    dispatch({type: "FETCH_UNIV", payload: data})
}

export const fetchUnivList = () => async dispatch => {
    const {data} = await server.get("/univs");
    dispatch({type: "FETCH_UNIVS", payload: data})
}

export const sendMail = (mail) => async dispatch => {
    const {data} = await server.post("/mail", {mail});
    dispatch({type: "GET_CODE", payload: data})
}