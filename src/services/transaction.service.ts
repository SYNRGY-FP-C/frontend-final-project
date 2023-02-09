import { backendJavaPrivate } from "../utils/axios";

const create = async (data) => {
  return await backendJavaPrivate.post("/v1/transactions/booking", data);
};

const transactions = async () => {
  return await backendJavaPrivate.get("/v1/transactions/owner");
};

const history = async () => {
  return await backendJavaPrivate.get("/v1/transactions/history");
};

const transactionService = {
  transactions,
  history,
  create,
};

export default transactionService;
