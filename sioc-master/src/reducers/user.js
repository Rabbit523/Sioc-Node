import {
    USER_PROFILE_SUCCEEDED,
    USER_SAVE_REQUESTED,
    USER_SAVE_SUCCEEDED
} from '../actions';

export default function user(state = {}, action) {
    switch (action.type) {
        case USER_PROFILE_SUCCEEDED:
            return {...state, userProfile: action.userProfile};
        case USER_SAVE_REQUESTED:
            return {...state, saving: true};
        case USER_SAVE_SUCCEEDED:
            return {...state, saving: false};
        default:
            return state;
    }
}
