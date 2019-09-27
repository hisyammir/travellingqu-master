import axios from 'axios';
import history from '../history';


//KELOMPOK USER PENGELOLA ACTIONS
export const fetchKlUserPengelolas = () => async(dispatch) => {
    const response = await axios.get('http://202.74.236.63/travellingqu/klpuser_pengelola');
    // console.log(response.data.result);
    dispatch({ type: 'FETCH_KLUSERPENGELOLAS', payload: response.data.result});
};

export const createKlUserPengelola = (formValues) => async (dispatch) => {
    const response = await axios.post('http://202.74.236.63/travellingqu/klpuser_pengelola', { ...formValues});
    dispatch({ type: 'CREATE_KLUSERPENGELOLA', payload: response.data.result });
    history.push('/keluserpengelola');
};

export const deleteKlUserPengelola = (id) => async(dispatch) => {
    await axios.delete(`http://202.74.236.63/travellingqu/klpuser_pengelola/${id}`);

    dispatch ({ type: 'DELETE_KLUSERPENGELOLA', payload: id});
    // history.push('/');
    history.push('/keluserpengelola');
};

export const fetchKlUserPengelola = (id) => async(dispatch) => {
    const response = await axios.get(`http://202.74.236.63/travellingqu/klpuser_pengelola/${id}`);

    dispatch({ type: 'FETCH_KLUSERPENGELOLA', payload: response.data.result })
};

export const editKlUserPengelola = (id, formValues) => async(dispatch) => {
    const response = await axios.patch(`http://202.74.236.63/travellingqu/klpuser_pengelola/${id}`, formValues);

    dispatch({ type: 'EDIT_KLUSERPENGELOLA', payload: response.data.result });
    history.push('/keluserpengelola');
};


//USER PENGGUNA ACTION

export const fetchUserPenggunas = () => async(dispatch) => {
    const response = await axios.get('http://202.74.236.63/travellingqu/user_pengguna');
    console.log(response.data);
    dispatch({ type: 'FETCH_USERPENGGUNAS', payload: response.data.result});
};

