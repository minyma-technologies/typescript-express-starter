import { z } from "zod";

export const userCreate = z.object({
  username: z.string().min(5).max(20),
  password: z.string().min(8).max(20),
  email: z.string().email(),
});

export const userUpdate = z.object({
  username: z.string().min(5).max(20).optional(),
  password: z.string().min(8).max(20).optional(),
  email: z.string().email().optional(),
});

export const userReturn = userUpdate.omit({ password: true });

export type UserCreate = z.infer<typeof userCreate>;
export type UserUpdate = z.infer<typeof userUpdate>;
export type UserReturn = z.infer<typeof userReturn>;
