import axios from "axios";

const instance = axios.create({
     baseURL: import.meta.env.VITE_BE_URL || "http://localhost:4300/",
     timeout: 10000,
    headers: {
        "Customer-Header" : "Hi Hello",
    },
});

instance.interceptors.request.use( (config) => {
    config.headers["Authorization"] = localStorage.getItem("authToken")

    return config;
},
 (error) => {
    return Promise.reject(error);
 }
);

export default instance;
