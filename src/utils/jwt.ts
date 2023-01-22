import jwt from "jsonwebtoken";

export const verifyAccessToken = (token: string) => {
  try {
    return !!jwt.decode(token, process.env.JWT_SECRET);
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
