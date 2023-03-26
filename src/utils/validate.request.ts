import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export function validate_request(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  next();
}
