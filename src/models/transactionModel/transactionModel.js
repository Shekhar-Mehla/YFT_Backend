import mongoose from "mongoose";
import { transactionSchema } from "./transactionSchema.js";

export const TransactionCollection = await new mongoose.model(
  "Transactions",
  transactionSchema
);
