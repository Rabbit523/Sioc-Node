import Http from './http';

import {Dwelling} from '../model';

export default class DwellingService {
    static async fetch() {
        const {dwellings} = await Http.get('api/dwellings');
        return dwellings;
    }
    static async save(dwelling) {
        if (dwelling._id) {
            return Http.put(`api/dwellings/${dwelling._id}`, {dwelling});
        }
        return Http.post('api/dwellings', {dwelling});
    }

    static async find(id) {
        const {dwelling} = await Http.get(`api/dwellings/${id}`);
        return {
            dwelling: new Dwelling(dwelling)
        };
    }

    static async findSearch(searchParams) {
        const {dwellings} = await Http.post('api/dwellings/search', {searchParams});
        return {dwellings};
    }

    static async findSiocId(siocId) {
        const id = await Http.get(`api/dwellings/search/${siocId}`);
        return id;
    }
}

