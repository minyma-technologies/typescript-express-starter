import { Router } from "express";
import { authRouter } from "./auth.router";
import { userRouter } from "./user.router";

export const indexRouter = Router();

indexRouter.use("/user", userRouter);
indexRouter.use("/auth", authRouter);
