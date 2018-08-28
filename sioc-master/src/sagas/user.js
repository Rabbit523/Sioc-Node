import {call, put} from 'redux-saga/effects';
import {
    receiveUserProfile,
    notifyUserSavedSuccessfully
} from '../actions';
import UserService from '../services/user';

export function* fetchUserProfile() {
    const userProfile = yield call(UserService.getProfile);
    yield put(receiveUserProfile(userProfile));
}

export function* saveUser({user}) {
    yield call(UserService.save, user);
    yield put(notifyUserSavedSuccessfully());
}

