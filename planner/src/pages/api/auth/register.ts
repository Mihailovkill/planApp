import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { promisify } from "util";
import crypto from "crypto";

const prisma = new PrismaClient();

const scrypt = promisify(crypto.scrypt);

interface UserRegister {
  username: string;
  firstName: string;
  lastName: string;
  showName: boolean;
  email: string;
  password: string;
}

interface NextApiRequestWithUserRegister extends NextApiRequest {
  body: UserRegister;
}

export default async function handle(
  req: NextApiRequestWithUserRegister,
  res: NextApiResponse
) {
  const { username, firstName, lastName, showName, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Username, email and password are required." });
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return res
      .status(400)
      .json({ message: "A user with this email already exists." });
  }

  const salt = crypto.randomBytes(8).toString("hex");
  const derivedKey = (await scrypt(password, salt, 64)) as Buffer;

  const hashedPassword = derivedKey.toString("hex");

  const newUser = await prisma.user.create({
    data: {
      name: firstName + " " + lastName,
      nickname: username,
      email: email,
      hashedPassword: `${hashedPassword}.${salt}`,
      showName: showName || false, // default to false if not provided
    },
  });

  if (newUser) {
    return res.status(201).json({ message: "User registered successfully." });
  } else {
    return res.status(400).json({ message: "Registration failed." });
  }
}
