// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your server URL

const ApiService = {
   getCustomers: () => axios.get(`${API_URL}/customers`),
   addCustomer: (customerData) => axios.post(`${API_URL}/customers`, customerData),
   // Other API calls...
};

export default ApiService;
