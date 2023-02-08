import { backendJavaPrivate, backendJavaPublic } from "../utils/axios";

const registerPencari = async (data) => {
  return await backendJavaPublic.post("/v1/auth/pencari/register", data);
};

const registerPemilik = async (data) => {
  return await backendJavaPublic.post("/v1/auth/pemilik/register", data);
};

const loginPencari = async (data) => {
  return await backendJavaPublic.post("/v1/auth/login", data);
};

const loginPemilik = async (data) => {
  return await backendJavaPublic.post("/v1/auth/login", data);
};

const login = async (data) => {
  return await backendJavaPublic.post("/v1/auth/login", data);
};

const changePassword = async (data) => {
  return await backendJavaPrivate.put("/v1/account/password", data);
};

const updateProfile = async (data) => {
  return await backendJavaPrivate.post("/v1/account/profile", data);
};

const updateIdentity = async (data) => {
  return await backendJavaPrivate.post("/v1/account/verification", data);
};

const me = async () => {
  return await backendJavaPrivate.get("/v1/account/profile");
};

const userService = {
  registerPencari,
  registerPemilik,
  loginPencari,
  loginPemilik,
  login,
  changePassword,
  updateProfile,
  updateIdentity,
  me,
};

export default userService;
