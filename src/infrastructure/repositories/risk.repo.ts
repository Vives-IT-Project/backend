import { Risk } from "@prisma/client";
import { prisma } from "../../utils/prisma";

export class RiskRepository {
  async findAll(): Promise<Risk[]> {
    return prisma.risk.findMany();
  }

  async findById(id: string): Promise<Risk | null> {
    return prisma.risk.findUnique({ where: { id } });
  }

  transformRisk(risk: Risk): Risk {
    const riskImpactLevel = {
      Low: 0,
      Medium: 1,
      High: 2,
    };
    risk.impactLevel =
      riskImpactLevel[
        risk.impactLevel as unknown as keyof typeof riskImpactLevel
      ];

    const riskProbability = {
      Low: 0,
      Medium: 1,
      High: 2,
    };
    risk.probability =
      riskProbability[
        risk.probability as unknown as keyof typeof riskProbability
      ];
    return risk;
  }

  async create(risk: Risk): Promise<Risk> {
    console.log("Creating risk:", risk);
    risk = this.transformRisk(risk);
    return prisma.risk.create({ data: risk });
  }

  async update(id: string, risk: Partial<Risk>): Promise<Risk | null> {
    risk = this.transformRisk(risk as Risk);

    return prisma.risk.update({ where: { id }, data: risk });
  }

  async delete(id: string): Promise<void> {
    await prisma.risk.delete({ where: { id } });
  }

  async findByBusinessCase(idBusinessCase: string): Promise<Risk[]> {
    return prisma.risk.findMany({
      where: { BusinessCase: { id: idBusinessCase } },
    });
  }
}
