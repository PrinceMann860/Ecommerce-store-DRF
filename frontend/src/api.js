import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: false, // Set to true if using session auth
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default api;