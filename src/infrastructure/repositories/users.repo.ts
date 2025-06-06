import { User } from "@prisma/client";
import { prisma } from "../../utils/prisma";

export class UserRepository {
  async findAll(): Promise<User[]> {
    return prisma.user.findMany();
  }

  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  async create(user: User): Promise<User> {
    console.log("Creating user:", user);
    return prisma.user.create({ data: user });
  }

  async update(id: string, user: Partial<User>): Promise<User | null> {
    return prisma.user.update({ where: { id }, data: user });
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } });
  }
}
