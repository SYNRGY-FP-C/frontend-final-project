import { backendJava } from "../utils/axios";

const registerPencari = async (data) => {
  return await backendJava.post("/v1/auth/pencari/register", data);
};

const registerPenyedia = async (data) => {
  return await backendJava.post("/v1/auth/pemilik/register", data);
};

const loginPencari = async (data) => {
  return await backendJava.post("/v1/auth/login", data);
};

const loginPenyedia = async (data) => {
  return await backendJava.post("/v1/auth/login", data);
};

const me = async () => {
  return await backendJava.get("/v1/account/profile");
};

const userService = {
  registerPencari,
  registerPenyedia,
  loginPencari,
  loginPenyedia,
  me,
};

export default userService;
