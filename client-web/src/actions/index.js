import history from '../history';
import server from '../apis/server';
import { connect } from 'react-redux';

export const signIn = (userId, userImagePath, userName) => async (dispatch) => {
    const {data} = await server.post('/login/google', {userId, userImagePath, userName});
    console.log(data);
	dispatch({ type: "SIGN_IN", payload: data});
    history.goBack();
};

export const signOut = () => {
    return {
        type: "SIGN_OUT"
    }
}