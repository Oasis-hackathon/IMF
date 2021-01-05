import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducers';
import univReducer from './univReducers';
import mailReducer from './mailReducer';
import productReducer from './productReducers';
import myUnivReducer from './myUnivReducer';
import otherReducer from './otherReducer';

export default combineReducers({
    user: userReducer,
    form: formReducer,
    univ: univReducer,
    mail: mailReducer,
    product: productReducer,
    myuniv: myUnivReducer,
    other: otherReducer
})