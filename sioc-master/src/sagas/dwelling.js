import {call, put} from 'redux-saga/effects';
import {
    receiveDwellings,
    notifyDwellingSavedSuccessfully,
    receiveOneDwelling,
    receiveFindedDwellings
} from '../actions';
import DwellingService from '../services/dwelling';


export function* saveDwelling({dwelling}) {
    yield call(DwellingService.save, dwelling);
    yield put(notifyDwellingSavedSuccessfully());
}

export function* fetchDwellings() {
    const dwellings = yield call(DwellingService.fetch);
    yield put(receiveDwellings(dwellings));
}

export function* findDwelling({id}) {
    const {dwelling} = yield call(DwellingService.find, id);
    yield put(receiveOneDwelling(dwelling));
}

export function* searchDwellings({searchParams}) {
    const {dwellings} = yield call(DwellingService.findSearch, searchParams);
    yield put(receiveFindedDwellings(dwellings));
}
