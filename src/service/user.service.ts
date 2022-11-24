import { prisma } from "../db/client";
import bcrypt from "bcrypt";
import { UserCreate, UserReturn } from "../schema/user.schema";

export async function registerUser(
  payload: UserCreate
): Promise<UserReturn | null> {
  // fetch by username or by email
  const user = await prisma.user.findMany({
    where: { OR: [{ username: payload.username }, { email: payload.email }] },
  });
  // check that user does not exist yet
  if (user.length) {
    return null;
  }
  // hash user password
  const hashedPassword = await bcrypt.hash(payload.password, 10);
  // save to db and return newly registered user
  return await prisma.user.create({
    data: { ...payload, password: hashedPassword },
  });
}
