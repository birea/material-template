/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const login = (email, password) => {
    return axios
      .post( API_URL + '/signin', { email, password })
      .then(res => {
          return res.data;
      })
      .catch(err => console.error(err));
}

const signup = (data) => {
    return axios
        .post( API_URL + '/signup', data )
        .then(res => {
            return res.data;
        })
        .catch((err) => console.error(err));
}

export default {
    login,
    signup
}