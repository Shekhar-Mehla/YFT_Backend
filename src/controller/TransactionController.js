import { TransactionCollection } from "../models/transactionModel/transactionModel.js";
export const PostTransaction = async (req, res) => {
  try {
    const UserId = req.info._id;
    const transaction = { ...req.body, UserId };
    console.log(transaction);
    const newTransaction = await TransactionCollection(transaction).save();
    newTransaction?._id
      ? res.status(201).json({
          status: "success",
          message: "you have added your transactioin successfully",
        })
      : res.status(401).jsons({
          status: "error",
          message: "operation could not be completed try agin later!",
        });
  } catch (error) {
    res.status(500).json({
      status: "erddrror",
      message: error.message,
    });
  }
};
export const getTransaction = async (req, res) => {
  try {
    const UserId = req.info._id;
    console.log(UserId);
    const result = await TransactionCollection.find({ UserId });
    res
      .status(200)
      .json({
        status: "success",
        message: "your transactions are ready",
        result,
      });
  } catch (error) {
    res.status(400).json({
      error: "error",
      message: error.message,
    });
  }
};
export const deleteTransaction = async (req, res) => {
  try {
    const UserId = req.info._id;
    const transactionsToDelete = req.body;
    const result = await TransactionCollection.deleteMany({
      UserId,
      _id: { $in: transactionsToDelete },
    });
    res.status(200).json({
      status: "success",
      message: "you have deleted your transactioin successfully",
      result,
    });
  } catch (error) {
    res.status(400).json({
      error: "error",
      message: error.message,
    });
  }
};
