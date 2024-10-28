import mongoose from "mongoose";
export const transactionSchema = new mongoose.Schema(
  {
    Tittle: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    amount: {
      required: true,
      type: Number,
    },
    TransactionDate: {
      required: true,
      type: Date,
    },
  },
  { timestamps: true }
);
