import jwt from "jsonwebtoken";
import { UserCollection } from "../src/models/userModel/userModel.js";

export const Authmiddleware = async (req, res, next) => {
  try {
    console.log("receiver here in middleware");
    const { authorization } = req.headers;
    if (authorization) {
      const decode = jwt.verify(authorization, process.env.SECRET_KEY);
      if (decode) {
        const { email } = decode;
        const user = await UserCollection.findOne({ email });
        if (user?._id) {
          user.passwordHashed = undefined;
          req.info = user;
          next();
        }

        return;
      }
    }
  } catch (error) {
    if (error.message.includes("jwt exp")) {
      error.message = "token is expired";
    }
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};
