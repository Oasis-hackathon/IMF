import history from '../history';
import server from '../apis/server';

export const signIn = (userId, userImage, userName) => async (dispatch) => {
    const response = await server.post('/login/google', {userId, userImage, userName});
    console.log(response.data);
	dispatch({ type: "SIGN_IN", payload: { id : response.data.id, userId, userImage, userName } });
    history.push('/');
};

export const signOut = () => {
    return {
        type: "SIGN_OUT"
    }
}