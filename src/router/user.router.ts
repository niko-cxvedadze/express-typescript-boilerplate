import express from "express";

import UserController from "@src/controllers/user.controller";

import {
  validate_post_user,
  validate_put_user,
} from "@src/validations/user.validations";
import { validate_request } from "@src/utils/validate.request";

export const user_router = express.Router();

user_router.get("/", UserController.get);
user_router.get("/:id", UserController.get_one);

user_router.post(
  "/",
  validate_post_user,
  validate_request,
  UserController.post
);

user_router.put(
  "/:id",
  validate_put_user,
  validate_request,
  UserController.put
);

user_router.delete("/:id", UserController.delete);
