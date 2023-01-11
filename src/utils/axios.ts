import axios from "axios";

const backendJava = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_JAVA,
});

backendJava.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorizations"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

backendJava.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

const backendFSW = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_FSW,
});

export {
  backendFSW,
  backendJava,
};
