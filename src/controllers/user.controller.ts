import { Request, Response } from "express";

import {
  get_users,
  get_one_user,
  post_user,
  put_user,
  delete_user,
} from "@src/services/user.service";

class UserController {
  async get(_: Request, response: Response) {
    try {
      const users = await get_users();
      response.status(200).json(users);
    } catch (error: any) {
      response.status(400).send(error?.message);
    }
  }

  async get_one(request: Request, response: Response) {
    try {
      const user = await get_one_user(request.params.id);
      response.status(200).json(user);
    } catch (error: any) {
      response.status(404).send(error?.message);
    }
  }

  async post(request: Request, response: Response) {
    try {
      const user = await post_user(request.body);
      response.status(201).json(user);
    } catch (error: any) {
      response.status(422).send(error?.message);
    }
  }

  async put(request: Request, response: Response) {
    try {
      const user = await put_user(request.params.id, request.body);
      response.status(201).json(user);
    } catch (error: any) {
      response.status(422).send(error?.message);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const user = await delete_user(request.params.id);
      response.status(200).json(user);
    } catch (error: any) {
      response.status(404).send(error?.message);
    }
  }
}

export default new UserController();
