import jwt from "jsonwebtoken";
export const jwtTocken = (obj) => {
  const token = jwt.sign(obj, process.env.SECRET_KEY, { expiresIn: "1h" });
  return token;
};
