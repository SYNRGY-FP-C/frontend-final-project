import { backendFSWPublic } from "../utils/axios";

const getAll = async () => {
  return await backendFSWPublic.get("/v1/rules");
};

const ruleService = {
  getAll,
};

export default ruleService;
