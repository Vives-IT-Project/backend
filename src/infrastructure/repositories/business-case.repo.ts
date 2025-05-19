import { BusinessCase, User } from "@prisma/client";
import { prisma } from "../../utils/prisma";

export default class BusinessCaseRepository {
  async findAll(): Promise<BusinessCase[]> {
    return prisma.businessCase.findMany();
  }

  async findAllTemplates(): Promise<BusinessCase[]> {
    return prisma.businessCase.findMany({
      where: { isTemplate: true },
      include: { User: { select: { name: true } } },
    });
  }

  async getFullTemplateDataById(id: string): Promise<BusinessCase | null> {
    return prisma.businessCase.findUnique({
      where: { id },
      include: {
        User: { select: { name: true } },
        Domain: true,
        EvaluationTopic: true,
        Goal: true,
        CostCenter: true,
      },
    });
  }

  async findById(id: string): Promise<BusinessCase | null> {
    return prisma.businessCase.findUnique({ where: { id } });
  }

  async create(data: any): Promise<BusinessCase> {
    const domains = data.domains.map((domain: any) => ({ id: domain }));
    const goals = data.goals.map((goal: any) => ({ id: goal }));
    const costCenters = data.costCenters.map((costCenter: any) => ({
      id: costCenter,
    }));
    const evaluationTopics = data.evaluationTopics.map(
      (evaluationTopic: any) => ({ id: evaluationTopic }),
    );

    delete data.domains;
    delete data.goals;
    delete data.costCenters;
    delete data.evaluationTopics;

    return prisma.businessCase.create({
      data: {
        ...data,
        Domain: { connect: domains },
        Goal: { connect: goals },
        EvaluationTopic: { connect: evaluationTopics },
        CostCenter: { connect: costCenters },
      },
    });
  }

  async update(
    id: string,
    businessCase: Partial<BusinessCase>,
  ): Promise<BusinessCase | null> {
    return prisma.businessCase.update({ where: { id }, data: businessCase });
  }

  async delete(id: string): Promise<void> {
    await prisma.businessCase.deleteMany({ where: { id } });
  }

  async findByOrganizationId(idOrganization: string): Promise<BusinessCase[]> {
    return prisma.businessCase.findMany({
      where: { Organization: { id: idOrganization } },
    });
  }

  async findByTemplateId(idTemplate: string): Promise<BusinessCase[]> {
    return prisma.businessCase.findMany({
      where: { idTemplate },
    });
  }
}
