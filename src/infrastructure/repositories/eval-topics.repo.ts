import { EvaluationTopic } from "@prisma/client";
import { prisma } from "../../utils/prisma";

export default class EvaluationTopicsRepository {
  async findAll(): Promise<EvaluationTopic[]> {
    return prisma.evaluationTopic.findMany();
  }

  async findById(id: string): Promise<EvaluationTopic | null> {
    return prisma.evaluationTopic.findUnique({ where: { id } });
  }

  async create(data: any): Promise<EvaluationTopic> {
    return prisma.evaluationTopic.create({ data });
  }

  async update(
    id: string,
    evaluationTopic: Partial<EvaluationTopic>,
  ): Promise<EvaluationTopic | null> {
    return prisma.evaluationTopic.update({
      where: { id },
      data: evaluationTopic,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.evaluationTopic.deleteMany({ where: { id } });
  }

  async findByOrganizationId(
    idOrganization: string,
  ): Promise<EvaluationTopic[]> {
    return prisma.evaluationTopic.findMany({
      where: { Organization: { id: idOrganization } },
    });
  }
}
