import { LoginSchema } from "../schema/auth.schema";
import { prisma } from "../db/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "config";

export async function getJwtToken(
  payload: LoginSchema
): Promise<string | null> {
  const user = await prisma.user.findUnique({
    where: { username: payload.username },
  });

  // check if user exists
  if (!user) {
    return null;
  }

  // check if passwords match
  if (await bcrypt.compare(payload.password, user.password)) {
    // if match, return jwt with user id
    return jwt.sign({ id: user.id }, config.get("auth.jwtSecret"), {
      algorithm: "HS256",
      expiresIn: "1d", // 1 day expiry
    });
  }
  return null;
}
