import { backendJavaPrivate } from "../utils/axios";

const create = async (data) => {
  return await backendJavaPrivate.post("/v1/transactions/booking", data);
};

const get = async (id) => {
  return await backendJavaPrivate.get(`/v1/transactions/history/${id}`);
};

const transactions = async () => {
  return await backendJavaPrivate.get("/v1/transactions/owner");
};

const acceptance = async (data) => {
  return await backendJavaPrivate.put("/v1/transactions/owner", data);
};

const history = async () => {
  return await backendJavaPrivate.get("/v1/transactions/history");
};

const upload = async (data) => {
  return await backendJavaPrivate.post("/v1/transactions/payment", data);
};

const transactionService = {
  transactions,
  history,
  acceptance,
  create,
  get,
  upload,
};

export default transactionService;
