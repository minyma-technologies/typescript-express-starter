import { registerUser } from "../../src/service/user.service";
import { prismaMock } from "../mocks/prisma.mock";

test("Should register new user", async () => {
  const registerPayload = {
    username: "John Doe",
    email: "hello@example.com",
    password: "password",
  };

  const mockUserInDb = {
    id: "clav3dsx8000008ku9p3q8ph0",
    username: "John Doe",
    email: "hello@example.com",
    password: "$2a$10$o61o9cORx8L88D.TCYQZbuJ7p0im5zMK1nX5bprtp/XJR2tNwJqp2",
  };

  // mock username and email lookup to return empty array i.e. no conflict
  prismaMock.user.findMany.mockResolvedValue([]);
  // mock user create to return a predefined id and password hash for testing
  prismaMock.user.create.mockResolvedValue(mockUserInDb);

  await expect(registerUser(registerPayload)).resolves.toEqual(mockUserInDb);
});

test("Should not register user when username taken", async () => {
  const registerPayload = {
    username: "John Doe",
    email: "hello@example.com",
    password: "password",
  };

  const mockUserInDb = {
    id: "clav3dsx8000008ku9p3q8ph0",
    username: "John Doe",
    email: "hello@example.com",
    password: "$2a$10$o61o9cORx8L88D.TCYQZbuJ7p0im5zMK1nX5bprtp/XJR2tNwJqp2",
  };

  // mock username and email lookup to return a record i.e. there is conflict
  prismaMock.user.findMany.mockResolvedValue([mockUserInDb]);

  await expect(registerUser(registerPayload)).rejects;
});
