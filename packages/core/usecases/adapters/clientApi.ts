import axios from "axios";

const token = localStorage.getItem('token') || '';

const clientAPI = axios.create({
    baseURL: 'https://api-test.sesametime.com',
    headers: { Authorization: `Bearer ${token}`}
})

export default clientAPI