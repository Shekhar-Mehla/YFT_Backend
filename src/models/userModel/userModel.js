import mongoose from "mongoose";
import { UserSchema } from "./UserSchema.js";

 export const UserCollection = await new mongoose.model("User", UserSchema)
 