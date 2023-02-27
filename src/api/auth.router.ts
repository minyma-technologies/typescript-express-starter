import { Router, Request, Response } from "express";
import { validate } from "./middleware";
import { LoginSchema, loginSchema } from "../schema/auth.schema";
import { UserCreate, userCreate } from "../schema/user.schema";
import { getJwtToken } from "../service/auth.service";
import { registerUser } from "../service/user.service";

export const authRouter = Router();

authRouter.post(
  "/login",
  validate(loginSchema),
  async (req: Request, res: Response) => {
    const payload = req.body as LoginSchema;
    const token = await getJwtToken(payload);
    if (!token) {
      return res.sendStatus(401);
    }
    return res.send({ token });
  }
);

authRouter.post(
  "/register",
  validate(userCreate),
  async (req: Request, res: Response) => {
    const payload = req.body as UserCreate;
    const user = await registerUser(payload);
    if (!user) {
      return res.sendStatus(400);
    }
    return res.status(201).send(user);
  }
);
