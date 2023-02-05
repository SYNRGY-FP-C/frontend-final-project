import { backendJavaPrivate, backendJavaPublic } from "../utils/axios";

const create = async (data) => {
  return await backendJavaPrivate.post("/api/rooms", data);
};

const getAll = async () => {
  return await backendJavaPublic.get("/api/rooms");
};

const get = async (id) => {
  return await backendJavaPublic.get(`/api/rooms/${id}`);
};

const update = async (id, data) => {
  return await backendJavaPrivate.put(`/api/rooms/${id}`, data);
};

const remove = async (id) => {
  return await backendJavaPrivate.delete(`/api/rooms/${id}`);
};

const roomService = {
  create,
  getAll,
  get,
  update,
  remove,
};

export default roomService;
