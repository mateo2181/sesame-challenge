import axios from "axios";

const clientAPI = axios.create({
    baseURL: 'https://api-test.sesametime.com'
})

export default clientAPI