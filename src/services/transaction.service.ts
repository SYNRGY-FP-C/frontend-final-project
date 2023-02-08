import { backendJavaPrivate } from "@/utils/axios";

const transactions = async () => {
  return await backendJavaPrivate.get("/v1/transactions/owner");
};

const history = async () => {
  return await backendJavaPrivate.get("/v1/transactions/history");
};

const transactionService = {
  transactions,
  history,
};

export default transactionService;
