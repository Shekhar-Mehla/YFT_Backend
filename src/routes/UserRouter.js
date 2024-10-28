import express from "express";
import {
  PostUsers,
  GetUser,
  getUserProfile,
} from "../controller/userController.js";
import { Authmiddleware } from "../AuthMiddleware.js";
export const UserRoute = express.Router();

UserRoute.post("/register", PostUsers);
UserRoute.post("/login", GetUser);
UserRoute.get("/", Authmiddleware, getUserProfile);
