import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_USERPENGGUNAS':
            return { ...state, ..._.mapKeys(action.payload, 'idklpuserpengelola')};
        default:
            return state;
    }
}
