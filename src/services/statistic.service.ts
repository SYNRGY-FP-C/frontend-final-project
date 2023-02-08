import { backendFSWPrivate, backendJavaPrivate } from "@/utils/axios";

const getAll = async () => {
  return await backendFSWPrivate.get("/v1/statistics");
};

const getAllDash = async () => {
  return await backendJavaPrivate.get("/v1/statistics");
};

const statisticService = {
  getAll,
  getAllDash,
};

export default statisticService;
