import React, { createContext, useState, useContext, useEffect } from "react";
import { login, logout, getUser, register } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const result = await getUser();
    if (result?.success) {
      setUser(result.data);
    } else {
      setUser(null);
      localStorage.removeItem("token");
    }
    setLoading(false);
  };

  const handleLogin = async (email, password) => {
    const result = await login(email, password);
    if (result?.success) {
      const { data } = result;
      localStorage.setItem("token", data.token || data.data?.token); // Adjust based on response structure
      await checkAuth(); // Refresh user state
    }
    return result;
  };

  const handleRegister = async (
    name,
    email,
    password,
    passwordConfirmation
  ) => {
    const result = await register(name, email, password, passwordConfirmation);
    if (result.success) {
      const { data } = result;
      localStorage.setItem("token", data.token); // Adjust based on response structure
      await checkAuth(); // Refresh user state
    }
    return result;
  };

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      localStorage.removeItem("token");
      setUser(null);
    }
    return result;
  };

  const isAuthenticated = !!user;

  const value = {
    user,
    loading,
    isAuthenticated,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
