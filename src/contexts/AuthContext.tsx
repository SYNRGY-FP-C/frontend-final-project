import { verifyAccessToken } from "@/utils/jwt";
import React, { createContext, useContext, useEffect, useState } from "react";

import userService from "../services/user.service";

const AuthContext = createContext(null);

type AuthProviderType = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await userService.me();
      setUser(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        const valid = verifyAccessToken(accessToken);
        if (!valid) {
          logoutUser();
          return;
        }
        // getUser();
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const registerPencari = async (data) => {
    logoutUser();
    const {
      data: { access_token, user_details },
    } = await userService.registerPencari(data);
    localStorage.setItem("accessToken", access_token);
    // const response = await userService.me();
    // setUser(response.data);
    setUser(user_details);
  };

  const registerPemilik = async (data) => {
    logoutUser();
    const {
      data: { access_token, user_details },
    } = await userService.registerPemilik(data);
    localStorage.setItem("accessToken", access_token);
    // const response = await userService.me();
    // setUser(response.data);
    setUser(user_details);
  };

  const loginPencari = async (data) => {
    logoutUser();
    const {
      data: { access_token, user_details },
    } = await userService.loginPencari(data);
    localStorage.setItem("accessToken", access_token);
    // const response = await userService.me();
    // setUser(response.data);
    setUser(user_details);
  };

  const loginPemilik = async (data) => {
    logoutUser();
    const {
      data: { access_token, user_details },
    } = await userService.loginPemilik(data);
    localStorage.setItem("accessToken", access_token);
    // const response = await userService.me();
    // setUser(response.data);
    setUser(user_details);
  };

  const logoutUser = async () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  const value = {
    isAuthenticated: !!user,
    isAdmin: user?.role?.name === "ROLE_USER_PENCARI",
    isSuperAdmin: user?.role?.name === "ROLE_SUPERUSER",
    isLoading,
    isVerified: false,
    user,
    registerPencari,
    registerPemilik,
    loginPencari,
    loginPemilik,
    logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
