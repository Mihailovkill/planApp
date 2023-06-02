import { PrismaClient, User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

interface RegisterRequestBody {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const prisma = new PrismaClient();

    try {
      const { username, firstName, lastName, email, password } =
        req.body as RegisterRequestBody;

      const user: User = await prisma.user.create({
        data: {
          name: firstName + " " + lastName,
          nickname: username,
          email,
          hashedPassword: password,
        },
      });

      res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Failed to register user:", error);
      res.status(500).json({ error: "Failed to register user" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
