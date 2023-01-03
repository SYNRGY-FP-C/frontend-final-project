import axios from "../utils/axios";

const create = async (data) => {
  return await axios.post("/api/rooms", data);
};

const getAll = async () => {
  return await axios.get("/api/rooms");
};

const get = async (id) => {
  return await axios.get(`/api/rooms/${id}`);
};

const update = async (id, data) => {
  return await axios.put(`/api/rooms/${id}`, data);
};

const remove = async (id) => {
  return await axios.delete(`/api/rooms/${id}`);
};

const roomService = {
  create,
  getAll,
  get,
  update,
  remove,
};

export default roomService;
