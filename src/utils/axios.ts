import axios from "axios";

const backendJavaPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_JAVA,
});

backendJavaPublic.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

const backendFSWPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_FSW,
});

backendFSWPublic.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

const backendFSWPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_FSW,
});

backendFSWPrivate.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

backendFSWPrivate.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

const backendJavaPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_JAVA,
});

backendJavaPrivate.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

backendJavaPrivate.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export {
  backendFSWPrivate,
  backendFSWPublic,
  backendJavaPrivate,
  backendJavaPublic,
};
