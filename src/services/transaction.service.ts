import { backendJavaPrivate } from "../utils/axios";

const create = async (data) => {
  return await backendJavaPrivate.post("/v1/transactions/booking", data);
};

const transactionService = {
  create,
};

export default transactionService;
