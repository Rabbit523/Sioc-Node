/* global fetch FormData ENDPOINT */
import StorageService from './storage';

const getAuthorizationHeader = () => `Bearer ${StorageService.getAuthToken()}`;

export default class Http {
    static async get(url) {
        const response = await fetch(`${ENDPOINT}${url}`, {
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json',
                Authorization: getAuthorizationHeader()
            }
        });
        return response.json();
    }

    static async deleteImg(url, token) {
        const data = new FormData();
        data.append('token', token);
        const response = await fetch(url, {
            method: 'post',
            body: data,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        return response.json();
    }

    static async post(url, body) {
        const response = await fetch(`${ENDPOINT}${url}`, {
            method: 'post',
            credentials: 'same-origin',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
                Authorization: getAuthorizationHeader()
            }
        });
        return response.json();
    }

    static async put(url, body) {
        const response = await fetch(`${ENDPOINT}${url}`, {
            method: 'put',
            credentials: 'same-origin',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
                Authorization: getAuthorizationHeader()
            }
        });
        return response.json();
    }

    static async delete(url, body) {
        const response = await fetch(`${ENDPOINT}${url}`, {
            method: 'delete',
            credentials: 'same-origin',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
                Authorization: getAuthorizationHeader()
            }
        });
        return response.json();
    }

    static async postFile(url, file) {
        const data = new FormData();
        data.append('file', file);

        const response = await fetch(`${ENDPOINT}${url}`, {
            method: 'POST',
            credentials: 'same-origin',
            body: data
        });
        return response.json();
    }
}
