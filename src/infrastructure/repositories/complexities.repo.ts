import { PrismaClient, Complexity } from "@prisma/client";

const prisma = new PrismaClient();


export class ComplexityRepository {
  async findAll(): Promise<Complexity[]> {
    return prisma.complexity.findMany();
  }

  async findById(id: string): Promise<Complexity | null> {
    return prisma.complexity.findUnique({ where: { id } });
  }

  async create(complexity: Complexity): Promise<Complexity> {
    console.log("Creating complexity:", complexity);
    return prisma.complexity.create({ data: complexity });
  }

  async update(id: string, complexity: Partial<Complexity>): Promise<Complexity | null> {
    return prisma.complexity.update({ where: { id }, data: complexity });
  }

  async delete(id: string): Promise<void> {
    await prisma.complexity.delete({ where: { id } });
  }
}
