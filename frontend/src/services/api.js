import api from "../lib/axios";

export const login = async (email, password) => {
  try {
    const response = await api.post("/api/login", { email, password });
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
};

export const logout = async () => {
  try {
    await api.post("/api/logout");
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const getUser = async () => {
  try {
    const response = await api.get("/api/user");
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const register = async (name, email, password, passwordConfirmation) => {
  try {
    const response = await api.post("/api/register", {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    });
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Registration failed",
    };
  }
};
