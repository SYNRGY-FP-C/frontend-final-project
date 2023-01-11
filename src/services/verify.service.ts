import { backendFSW } from "../utils/axios";

const requestVerify = async (data) => {
  return await backendFSW.post("/api/verify/request", data);
};

const verify = async (data) => {
  return await backendFSW.post("/api/verify", data);
};

const verifyService = {
  requestVerify,
  verify,
};

export default verifyService;
