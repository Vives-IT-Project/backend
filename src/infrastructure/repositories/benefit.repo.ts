import { Benefit } from "@prisma/client";
import { prisma } from "../../utils/prisma";

export class BenefitRepository {
  async findAll(): Promise<Benefit[]> {
    return prisma.benefit.findMany();
  }

  async findById(id: string): Promise<Benefit | null> {
    return prisma.benefit.findUnique({ where: { id } });
  }

  transformBenefit(benefit: Benefit): Benefit {
    return benefit;
  }

  async create(benefit: Benefit): Promise<Benefit> {
    console.log("Creating benefit:", benefit);
    benefit = this.transformBenefit(benefit);
    return prisma.benefit.create({ data: benefit });
  }

  async update(id: string, benefit: Partial<Benefit>): Promise<Benefit | null> {
    benefit = this.transformBenefit(benefit as Benefit);

    return prisma.benefit.update({ where: { id }, data: benefit });
  }

  async delete(id: string): Promise<void> {
    await prisma.benefit.delete({ where: { id } });
  }

  async findByBusinessCase(idBusinessCase: string): Promise<Benefit[]> {
    return prisma.benefit.findMany({
      where: { BusinessCase: { id: idBusinessCase } },
    });
  }
}
