import { backendJavaPrivate, backendJavaPublic } from "../utils/axios";

const create = async (data) => {
  return await backendJavaPrivate.post("/v1/kost", data);
};

const getAll = async () => {
  return await backendJavaPublic.get("/v1/kost");
};

const get = async (id) => {
  return await backendJavaPublic.get(`/v1/kost/${id}`);
};

const update = async (id, data) => {
  return await backendJavaPrivate.put(`/v1/kost/${id}`, data);
};

const remove = async (id) => {
  return await backendJavaPrivate.delete(`/v1/kost/${id}`);
};

const kostService = {
  create,
  getAll,
  get,
  update,
  remove,
};

export default kostService;
