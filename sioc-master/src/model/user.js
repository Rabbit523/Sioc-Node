export default class User {
    _id = undefined;
    name = '';
    surname = '';
    username = '';
    password = '';
    email = '';
    whatsapp = '';
    sex = '';
    birthdate = '';
    role = undefined;

    constructor(obj) {
        Object.assign(this, obj);
    }
}

