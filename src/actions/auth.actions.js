import { LOGIN } from './actionTypes';
import AuthService from '../services/auth.service';

export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then(
        (data) => {
            dispatch({
                type: LOGIN,
                payload: {user: data} 
            });
            return data
        },
        (err) => {
            console.error(err)
            return;
        }
    )
}

export const signup = (data) => (dispatch) => {
    return AuthService.signup(data).then(
        (data) => {
            console.log(data);
            return data
        },
        (err) => {
            console.error(err)
            return;
        }
    )
}