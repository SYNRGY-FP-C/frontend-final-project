import { backendFSWPrivate } from "@/utils/axios";

const getUsers = async (data) => {
  return await backendFSWPrivate.get("/v1/users", data);
};

const getKost = async (data = {}) => {
  return await backendFSWPrivate.get("/v1/kost", data);
};

const getRooms = async (data) => {
  return await backendFSWPrivate.get("/v1/rooms", data);
};

const getTransaction = async (data = {}) => {
  return await backendFSWPrivate.get("/v1/transactions", data);
};

const getFacilities = async (data = {}) => {
  return await backendFSWPrivate.get("/v1/facilities", data);
};

const getRules = async (data = {}) => {
  return await backendFSWPrivate.get("/v1/rules", data);
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
