// frontend/web/utils/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend server
  timeout: 5000,
});

export default api;
