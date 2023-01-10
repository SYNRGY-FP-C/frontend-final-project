import { backendJava } from "../utils/axios";

const create = async (data) => {
  return await backendJava.post("/api/rooms", data);
};

const getAll = async () => {
  return await backendJava.get("/api/rooms");
};

const get = async (id) => {
  return await backendJava.get(`/api/rooms/${id}`);
};

const update = async (id, data) => {
  return await backendJava.put(`/api/rooms/${id}`, data);
};

const remove = async (id) => {
  return await backendJava.delete(`/api/rooms/${id}`);
};

const roomService = {
  create,
  getAll,
  get,
  update,
  remove,
};

export default roomService;
