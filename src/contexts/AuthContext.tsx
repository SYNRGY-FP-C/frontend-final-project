import { ROLE_ADMIN, ROLE_SUPERADMIN } from "@/constants/roles";
import userService from "@/services/user.service";
import otpService from "@/services/verify.service";
import { verifyAccessToken } from "@/utils/jwt";
import React, { createContext, useContext, useEffect, useState } from "react";

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
      logoutUser();
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
        getUser();
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
      data: { access_token },
    } = await userService.registerPencari(data);
    localStorage.setItem("accessToken", access_token);
    const response = await userService.me();
    setUser(response.data);
  };

  const registerPemilik = async (data) => {
    logoutUser();
    const {
      data: { access_token },
    } = await userService.registerPemilik(data);
    localStorage.setItem("accessToken", access_token);
    const response = await userService.me();
    setUser(response.data);
  };

  const loginPencari = async (data) => {
    logoutUser();
    const {
      data: { access_token },
    } = await userService.loginPencari(data);
    localStorage.setItem("accessToken", access_token);
    const response = await userService.me();
    setUser(response.data);
  };

  const loginPemilik = async (data) => {
    logoutUser();
    const {
      data: { access_token },
    } = await userService.loginPemilik(data);
    localStorage.setItem("accessToken", access_token);
    const response = await userService.me();
    setUser(response.data);
  };

  const logoutUser = async () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  const requestOTP = async (data) => {
    await otpService.requestVerify(data);
  };

  const verifyOTP = async (data) => {
    await otpService.verify(data);
    const response = await userService.me();
    setUser(response.data);
  };

  const value = {
    isAuthenticated: !!user,
    isAdmin: user?.role?.name === ROLE_ADMIN,
    isSuperAdmin: user?.role?.name === ROLE_SUPERADMIN,
    isLoading,
    isVerified: false,
    user,
    registerPencari,
    registerPemilik,
    loginPencari,
    loginPemilik,
    logoutUser,
    requestOTP,
    verifyOTP,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
