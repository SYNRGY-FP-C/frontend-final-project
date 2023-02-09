import { backendJavaPrivate } from "../utils/axios";

const create = async (data) => {
  return await backendJavaPrivate.post("/v1/transactions/booking", data);
};

const get = async (id) => {
  return await backendJavaPrivate.get(`/v1/transactions/history/${id}`);
};

const transactionService = {
  create,
  get,
};

export default transactionService;
