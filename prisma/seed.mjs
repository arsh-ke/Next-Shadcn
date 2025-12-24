import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashed = bcrypt.hashSync("Password123!", 10);
  const existing = await prisma.user.findUnique({ where: { email: "test@example.com" } });
  if (existing) {
    console.log("Test user already exists.");
    return;
  }
  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      name: "Test User",
      hashedPassword: hashed,
    },
  });
  console.log("Created test user:", user.id);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });