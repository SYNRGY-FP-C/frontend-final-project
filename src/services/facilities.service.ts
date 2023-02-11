import { backendFSWPrivate } from "../utils/axios";

const create = async (data) => {
  return await backendFSWPrivate.post("/v1/facilities", data);
};

const getAll = async () => {
  return await backendFSWPrivate.get("/v1/facilities");
};

const get = async (id) => {
  return await backendFSWPrivate.get(`/v1/facilities/${id}`);
};

const update = async (id, data) => {
  return await backendFSWPrivate.put(`/v1/facilities/${id}`, data);
};

const remove = async (id) => {
  return await backendFSWPrivate.delete(`/v1/facilities/${id}`);
};

const kostService = {
  create,
  getAll,
  get,
  update,
  remove,
};

export default kostService;
