import { Milestone } from "@prisma/client";
import { prisma } from "../../utils/prisma";

export class MilestoneRepository {
  async findAll(): Promise<Milestone[]> {
    return prisma.milestone.findMany();
  }

  async findById(id: string): Promise<Milestone | null> {
    return prisma.milestone.findUnique({ where: { id } });
  }

  async create(milestone: Milestone): Promise<Milestone> {
    console.log("Creating milestone:", milestone);
    return prisma.milestone.create({ data: milestone });
  }

  async update(
    id: string,
    milestone: Partial<Milestone>,
  ): Promise<Milestone | null> {
    return prisma.milestone.update({ where: { id }, data: milestone });
  }

  async delete(id: string): Promise<void> {
    await prisma.milestone.delete({ where: { id } });
  }

  async findByBusinessCase(idBusinessCase: string): Promise<Milestone[]> {
    return prisma.milestone.findMany({
      where: { BusinessCase: { id: idBusinessCase } },
    });
  }
}
