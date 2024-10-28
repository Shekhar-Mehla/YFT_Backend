import mongoose from "mongoose";
export const connectiondb = async () => {
  try {
    const dbConnection = await mongoose.connect(
      `${process.env.MONGO_CONNECTION_}`
    );
    return dbConnection && console.log("database is connected succesfull");
  } catch (error) {
    console.log(error.message);
  }
};
