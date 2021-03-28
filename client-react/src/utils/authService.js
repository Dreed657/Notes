import axios from 'axios';

const API_URL = 'http://localhost:9999/auth/';

const register = (username, email, password) => {
    return axios.post(API_URL + 'register', {
        email,
        username,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + 'login', { username, password })
        .then((response) => {
            console.log(response);

            setToken(response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const verify = (token) => {
    return axios.get('http://localhost:9999/auth/verify', {
        headers: { Authorization: 'Bearer ' + token },
    });
};

const removeToken = () => {
    localStorage.removeItem('token');
};

function setToken(token) {
    localStorage.setItem('token', token);
}

function getToken() {
    return localStorage.getItem('token');
}

export {
    register,
    login,
    logout,
    getCurrentUser,
    verify,
    removeToken,
    getToken,
};
