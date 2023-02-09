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

const cmsService = {
  getUsers,
  getKost,
  getRooms,
  getTransaction,
};

export default cmsService;
