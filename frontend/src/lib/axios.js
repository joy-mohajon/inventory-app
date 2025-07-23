import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true, // For CSRF cookies
});

api.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

// Add token to headers if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (["post", "put", "patch", "delete"].includes(config.method)) {
      try {
        return api.get("/sanctum/csrf-cookie").then(() => config);
      } catch (error) {
        console.error("CSRF fetch failed:", error);
        return Promise.reject(error);
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
