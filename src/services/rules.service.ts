import { backendFSWPrivate } from "../utils/axios";

const create = async (data) => {
  return await backendFSWPrivate.post("/v1/rules", data);
};

const getAll = async () => {
  return await backendFSWPrivate.get("/v1/rules");
};

const get = async (id) => {
  return await backendFSWPrivate.get(`/v1/rules/${id}`);
};

const update = async (id, data) => {
  return await backendFSWPrivate.put(`/v1/rules/${id}`, data);
};

const remove = async (id) => {
  return await backendFSWPrivate.delete(`/v1/rules/${id}`);
};

const ruleService = {
  getAll,
  get,
  update,
  create,
  remove,
};

export default ruleService;
