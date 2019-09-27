 import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_KLUSERPENGELOLAS':
            return { ...state, ..._.mapKeys(action.payload, 'idklpuserpengelola')};
        case 'CREATE_KLUSERPENGELOLA':
            if(!action.payload){
                return null;
            }
            return {...state, [action.payload.id]: action.payload};
        case 'DELETE_KLUSERPENGELOLA':
            if(!action.payload){
                return null;
            }
            return _.omit(state, action.payload);
        case 'FETCH_KLUSERPENGELOLA':
            if(!action.payload){
                return null;
            }
                return { ...state, [action.payload.id]: action.payload};
        case 'EDIT_KLUSERPENGELOLA':
            if(!action.payload){
                    return null;
                }
                return { ...state, [action.payload.id]: action.payload};  
        default:
            return state;
        }
};