import {LOAD_USER_SUCCESS} from "./constants";

const profileReducer = (state={data: {}}, action) => {
    switch (action.type) {
        case LOAD_USER_SUCCESS:
            return {...state, data: action.data};
        default:
            return state;
    }
    return state;
};

export default profileReducer;