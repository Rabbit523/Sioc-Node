const mongoose = require('mongoose').set('debug', true);
const {values} = require('lodash');

const Schema = mongoose.Schema;
const model = module.exports;

model.enums = {
    roles: {
        ADMIN: 'admin',
        MARTILLERO: 'martillero',
        VENDEDOR: 'vendedor',
        USUARIO: 'usuario'
    }
};

model.User = mongoose.model('User', new Schema({
    username: {type: String},
    password: {type: String},
    email: {type: String},
    name: {type: String},
    surname: {type: String},
    whatsapp: {type: Number},
    sex: {type: String},
    role: {type: String, enum: values(model.enums.roles)}
}, {collection: 'users', timestamps: true}));

model.Dwelling = mongoose.model('Dwelling', new Schema({
    siocId: {type: Number},
    publicationType: {type: String},
    address: {},
    type: {type: String},
    subtype: {type: String},
    currency: {type: String},
    price: {type: Number},
    occupationStatus: {type: String},
    spaces: {},
    features: {},
    services: {},
    legal: {},
    images: {},
    generalDescription: {type: String},
    privateDescription: {type: String},

}, {collection: 'dwelling', timestamps: true}));


model.Error = mongoose.model('Error', new Schema({}, {collection: 'logs.errors'}));
