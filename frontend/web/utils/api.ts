// frontend/web/utils/api.ts
import axios from 'axios';
import 'leaflet/dist/leaflet.css';


const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Your backend server
  timeout: 5000,
});

export default api;
