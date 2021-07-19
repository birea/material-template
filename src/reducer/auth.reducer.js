
import {
    UPDATE_FIELD_AUTH,
    LOGIN
} from '../actions/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state={}, action) => {
    switch(action.type) {
        case UPDATE_FIELD_AUTH:
            return {
                ...state,
                [action.key]: action.value,     
            }
        case LOGIN:
            return {
                ...state,
                user: action.payload.user
            }
        default: 
            return state;
    }
}
