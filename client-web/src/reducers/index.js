import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducers';
import univReducer from './univReducers';
import mailReducer from './mailReducer';

export default combineReducers({
    user: userReducer,
    form: formReducer,
    univ: univReducer,
    mail: mailReducer
})