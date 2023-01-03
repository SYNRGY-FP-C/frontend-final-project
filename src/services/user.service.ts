import axios from "../utils/axios";

const register = async (data) => {
  return await axios.post("/api/users/register", data);
};

const login = async (data) => {
  return await axios.post("/api/users/login", data);
};

const me = async () => {
  return await axios.get("/api/users/me");
};

const userService = {
  register,
  login,
  me,
};

export default userService;
