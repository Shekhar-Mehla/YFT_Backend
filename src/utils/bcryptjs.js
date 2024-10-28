import bcrypt from "bcrypt";
export const encryptedPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};
export const ComparePassword = (databasePassword, UserPassword) => {
  console.log("camparing password");
  return bcrypt.compareSync(UserPassword, databasePassword);
};
