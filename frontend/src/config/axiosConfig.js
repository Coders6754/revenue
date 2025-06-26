import axios from 'axios';


let baseURL;

if (import.meta.env.PROD) {
  baseURL = 'https://revenue-q8ue.vercel.app';
} else {
  baseURL = ''; 
}

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient; 
