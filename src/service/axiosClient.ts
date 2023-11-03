import axios,{AxiosInstance} from "axios";
import queryString from "query-string";
import apiConfig from "./apiConfig.ts";

const axiosInstance:AxiosInstance = axios.create({
    baseURL: apiConfig.baseUrl,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json',
    },
    paramsSerializer: params => queryString.stringify({...params}),
});

axiosInstance.interceptors.request.use(
    (config) => {
        console.log('Request Interceptor: Request is being sent', config);
        return config;
    },
    (error) => {
        console.log('Request Interceptor: Request has failed', error);
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        console.log('Response Interceptor: Response received', response);
        return response;
    },
    (error) => {
        console.log('Response Interceptor: Response has failed', error);
        return Promise.reject(error);
    }
)

export default axiosInstance;