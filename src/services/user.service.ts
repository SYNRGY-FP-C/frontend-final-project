import { backendJava } from "../utils/axios";

const registerPencari = async (data) => {
  return await backendJava.post("/v1/auth/pencari/register", data);
};

const registerPemilik = async (data) => {
  return await backendJava.post("/v1/auth/pemilik/register", data);
};

const loginPencari = async (data) => {
  return await backendJava.post("/v1/auth/login", data);
};

const loginPemilik = async (data) => {
  return await backendJava.post("/v1/auth/login", data);
};

const me = async () => {
  return await backendJava.get("/v1/account/profile");
};

const userService = {
  registerPencari,
  registerPemilik,
  loginPencari,
  loginPemilik,
  me,
};

export default userService;
