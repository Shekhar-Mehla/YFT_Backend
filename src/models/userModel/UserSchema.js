import mongoose from "mongoose";
export const UserSchema = new mongoose.Schema(
  {
    Fname: {
      required: true,
      type: String,
    },
    Lname: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
      unique: true,
      index: 1,
    },
    passwordHashed: {
      required: true,
      type: String,
    },

    resetPasswordToken: {
      type: String,
      default: undefined, // Stores the reset token
    },
    resetPasswordExpire: {
      type: Date,
      default: undefined, // Stores the expiration time of the reset token
    },
  },
  { timestamps: true }
);
