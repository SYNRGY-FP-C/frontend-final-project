import { backendJavaPrivate, backendJavaPublic } from "../utils/axios";

const create = async (data) => {
  return await backendJavaPrivate.post("/v1/rooms/add", data);
};

const getAll = async () => {
  return await backendJavaPublic.get("/v1/public/rooms");
};

const get = async (id) => {
  return await backendJavaPublic.get(`/v1/public/rooms/${id}`);
};

const getByKost = async (id) => {
  return await backendJavaPrivate.get(`/v1/rooms/${id}`);
};

const update = async (id, data) => {
  return await backendJavaPrivate.put(`/v1/rooms/${id}`, data);
};

const remove = async (id) => {
  return await backendJavaPrivate.delete(`/v1/rooms/${id}`);
};

const search = async (data) => {
  return await backendJavaPublic.get("/v1/public/search", data);
};

const roomService = {
  create,
  getAll,
  getByKost,
  get,
  update,
  remove,
  search,
};

export default roomService;
