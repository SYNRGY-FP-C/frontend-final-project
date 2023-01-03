import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";

import userService from "../services/user.service";

const AuthContext = createContext(null);

type AuthProviderType = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderType) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await userService.me();
      setUser(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      router.push("/login");
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      getUser();
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const registerUser = async (data) => {
    const {
      data: { token },
    } = await userService.register(data);
    localStorage.setItem("accessToken", token);
    const response = await userService.me();
    setUser(response.data);
    // router.push("/");
    // if (response.data.role === "admin") router.push("/admin");
    // if (response.data.role === "superadmin") router.push("/superadmin");
  };

  const loginUser = async (data) => {
    const {
      data: { token },
    } = await userService.login(data);
    localStorage.setItem("accessToken", token);
    const response = await userService.me();
    setUser(response.data);
    // router.push("/");
  };

  const logoutUser = async () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  const value = {
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin",
    isSuperAdmin: user?.role === "superadmin",
    isLoading,
    user,
    registerUser,
    loginUser,
    logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
