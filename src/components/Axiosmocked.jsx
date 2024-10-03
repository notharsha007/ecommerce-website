// src/mockAxios.js
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

// Create an instance of Axios
const axiosInstance = axios.create();

// Create a mock adapter
const mock = new AxiosMockAdapter(axiosInstance);

// Set up the mock response
mock.onGet('/api/data').reply(200, {
  data: [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ],
});

// Export the axios instance
export default axiosInstance;
