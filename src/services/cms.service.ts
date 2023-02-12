import { backendFSWPrivate } from "@/utils/axios";

const getUsers = async () => {
  return await backendFSWPrivate.get("/v1/users");
};

const getKost = async () => {
  return await backendFSWPrivate.get("/v1/kost");
};

const getRooms = async () => {
  return await backendFSWPrivate.get("/v1/rooms");
};

const getTransaction = async () => {
  return await backendFSWPrivate.get("/v1/transactions");
};

const getFacilities = async () => {
  return await backendFSWPrivate.get("/v1/facilities");
};

const getRules = async () => {
  return await backendFSWPrivate.get("/v1/rules");
};

const getTransactionById = async (id) => {
  return await backendFSWPrivate.get(`/v1/transactions/${id}`);
};

const updateTransactionById = async (id, data) => {
  return await backendFSWPrivate.put(`/v1/transactions/${id}`, data);
};

const cmsService = {
  getUsers,
  getKost,
  getRooms,
  getTransaction,
  getRules,
  getFacilities,
  getTransactionById,
  updateTransactionById,
};

export default cmsService;
