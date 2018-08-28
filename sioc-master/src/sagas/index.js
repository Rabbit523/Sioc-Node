import {takeEvery} from 'redux-saga';
import {
    SIGN_OUT_REQUESTED,
    DWELLING_SAVE_REQUESTED,
    DWELLINGS_FETCH_REQUESTED,
    DWELLING_FIND_REQUESTED,
    DWELLINGS_SEARCH_REQUESTED,
    USER_PROFILE_REQUESTED,
    USER_SAVE_REQUESTED
} from '../actions';
import {saveDwelling, fetchDwellings, findDwelling, searchDwellings} from './dwelling';
import {signOut} from './session';
import {fetchUserProfile, saveUser} from './user';

export default function* root() {
    yield [
        takeEvery(SIGN_OUT_REQUESTED, signOut),
        takeEvery(DWELLING_SAVE_REQUESTED, saveDwelling),
        takeEvery(DWELLINGS_FETCH_REQUESTED, fetchDwellings),
        takeEvery(DWELLING_FIND_REQUESTED, findDwelling),
        takeEvery(DWELLINGS_SEARCH_REQUESTED, searchDwellings),
        takeEvery(USER_PROFILE_REQUESTED, fetchUserProfile),
        takeEvery(USER_SAVE_REQUESTED, saveUser)
    ];
}
