import { backendFSW } from "../utils/axios";

const requestVerify = async (data) => {
  return await backendFSW.post("/v1/verify/request", data);
};

const verify = async (data) => {
  return await backendFSW.post("/v1/verify", data);
};

const verifyService = {
  requestVerify,
  verify,
};

export default verifyService;
