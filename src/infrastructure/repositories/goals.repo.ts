import { Goal } from "@prisma/client";
import { prisma } from "../../utils/prisma";

export default class GoalRepository {
  async findAll(): Promise<Goal[]> {
    return prisma.goal.findMany();
  }

  async findById(id: string): Promise<Goal | null> {
    return prisma.goal.findUnique({ where: { id } });
  }

  async create(name: string, idOrganization: string): Promise<Goal> {
    console.log("Creating goal:", name);
    return prisma.goal.create({ data: { name, idOrganization } });
  }

  async update(id: string, goal: Partial<Goal>): Promise<Goal | null> {
    return prisma.goal.update({ where: { id }, data: goal });
  }

  async delete(id: string): Promise<void> {
    await prisma.goal.delete({ where: { id } });
  }

  async findByOrganizationId(idOrganization: string): Promise<Goal[]> {
    return prisma.goal.findMany({
      where: { Organization: { id: idOrganization } },
    });
  }
}
