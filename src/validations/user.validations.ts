import { body } from "express-validator";

export const validate_post_user = [
  body("username")
    .notEmpty()
    .withMessage("username is required")
    .isString()
    .withMessage("username is invalid"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email is invalid"),
];

export const validate_put_user = [
  body("username").optional().isString().withMessage("username is invalid"),
  body("email").optional().isEmail().withMessage("email is invalid"),
];
