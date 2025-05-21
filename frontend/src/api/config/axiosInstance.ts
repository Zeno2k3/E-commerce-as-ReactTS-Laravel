import axios from "axios";
import env from './env';

const apiClient = axios.create({
    baseURL: env.BASE_URL,
    timeout: env.TIME_OUT || 10000,
    headers: {}
});




export default apiClient;