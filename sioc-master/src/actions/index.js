export const SIGN_OUT_REQUESTED = 'SIGN_OUT_REQUESTED';

export function requestSignOut() {
    return {type: SIGN_OUT_REQUESTED};
}

export const SAVE_PARTIAL_DWELLING = 'SAVE_PARTIAL_DWELLING';

export function savePartialDwelling(dwelling) {
    return {type: SAVE_PARTIAL_DWELLING, dwelling};
}

export const DWELLING_SAVE_REQUESTED = 'DWELLING_SAVE_REQUESTED ';
export const DWELLING_SAVE_SUCCEEDED = 'DWELLING_SAVE_SUCCEEDED ';

export function requestSaveDwelling(dwelling) {
    return {type: DWELLING_SAVE_REQUESTED, dwelling};
}
export function notifyDwellingSavedSuccessfully() {
    return {type: DWELLING_SAVE_SUCCEEDED};
}


export const DWELLINGS_FETCH_REQUESTED = 'DWELLINGS_FETCH_REQUESTED';
export const DWELLINGS_FETCH_SUCCEEDED = 'DWELLINGS_FETCH_SUCCEEDED';

export function requestDwellings() {
    return {type: DWELLINGS_FETCH_REQUESTED};
}

export function receiveDwellings(dwellings) {
    return {type: DWELLINGS_FETCH_SUCCEEDED, dwellings};
}

export const DWELLING_FIND_REQUESTED = 'DWELLING_FIND_REQUESTED';
export const DWELLING_FIND_SUCCEEDED = 'DWELLING_FIND_SUCCEEDED';

export function requestDwelling(id) {
    return {type: DWELLING_FIND_REQUESTED, id};
}

export function receiveOneDwelling(dwelling) {
    return {type: DWELLING_FIND_SUCCEEDED, dwelling};
}

export const DWELLINGS_SEARCH_REQUESTED = 'DWELLINGS_SEARCH_REQUESTED';
export const DWELLINGS_SEARCH_SUCCEEDED = 'DWELLINGS_SEARCH_SUCCEEDED';

export function requestFindDwellings(searchParams) {
    return {type: DWELLINGS_SEARCH_REQUESTED, searchParams};
}

export function receiveFindedDwellings(dwellings) {
    return {type: DWELLINGS_SEARCH_SUCCEEDED, dwellings};
}

export const USER_PROFILE_REQUESTED = 'USER_PROFILE_REQUESTED';
export const USER_PROFILE_SUCCEEDED = 'USER_PROFILE_SUCCEEDED';

export function requestUserProfile() {
    return {type: USER_PROFILE_REQUESTED};
}

export function receiveUserProfile(userProfile) {
    return {type: USER_PROFILE_SUCCEEDED, userProfile};
}

export const USER_SAVE_REQUESTED = 'USER_SAVE_REQUESTED';
export const USER_SAVE_SUCCEEDED = 'USER_SAVE_SUCCEEDED';

export function requestSaveUser(user) {
    return {type: USER_SAVE_REQUESTED, user};
}

export function notifyUserSavedSuccessfully() {
    return {type: USER_SAVE_SUCCEEDED};
}
