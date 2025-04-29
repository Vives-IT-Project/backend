import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

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
    return prisma.user.create({ data: user });
  }

  async update(id: string, user: Partial<User>): Promise<User | null> {
    return prisma.user.update({ where: { id }, data: user });
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } });
  }
}
