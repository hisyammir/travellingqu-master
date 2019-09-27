import { combineReducers} from 'redux';
import pengelolaReducer from './pengelolaReducer';
import { reducer as formReducer} from 'redux-form';
import userPenggunaReducer from './userPenggunaReducer';

export default combineReducers({   
    pengelola: pengelolaReducer,
    form: formReducer,
    userpengguna: userPenggunaReducer
})