import axios from 'axios';
import {environment, stateTypes} from 'utilities';

const API_URL = environment.AUTH_BACKEND_URL;

export function httpPost(
    url: string,
    data: {[key: string]: any},
    auth_token?: stateTypes.AuthToken,
) {
    if (auth_token) {
        return axios.post(API_URL + url, {
            ...data,
            headers: {
                Authorization: `${auth_token.token_type} ${auth_token.access_token}`,
            },
        });
    } else {
        return axios.post(API_URL + url, data);
    }
}

export function httpGet(url: string, auth_token?: stateTypes.AuthToken) {
    if (auth_token) {
        return axios.get(API_URL + url, {
            headers: {
                Authorization: `${auth_token.token_type} ${auth_token.access_token}`,
            },
        });
    } else {
        return axios.get(API_URL + url);
    }
}
