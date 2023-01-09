import axios from "../utils/axios";

const registerPencari = async (data) => {
  return await axios.post("/v1/auth/register/pencari", data);
};

const registerPenyedia = async (data) => {
  return await axios.post("/v1/auth/register/penyedia", data);
};

const loginPencari = async (data) => {
  return await axios.post("/v1/auth/login/pencari", data);
};

const loginPenyedia = async (data) => {
  return await axios.post("/v1/auth/login/penyedia", data);
};

const me = async () => {
  return await axios.get("/api/users/me");
};

const userService = {
  registerPencari,
  registerPenyedia,
  loginPencari,
  loginPenyedia,
  me
};

export default userService;
