import {LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_FAILURE} from './constants';

export function loadUser(payload) {
    return {
        type: LOAD_USER,
        payload: payload
    }
}

export function loadUserSuccess(data) {
    return {
        type: LOAD_USER_SUCCESS,
        data
    }
}

export function loadUserFailure(error) {
    return {
        type: LOAD_USER_FAILURE,
        errorMessage: error
    }
}
