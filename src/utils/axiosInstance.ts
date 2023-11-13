import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api-ku-hackathon.vercel.app",
    
});

export default axiosInstance;
