import { BusinessCase } from "@prisma/client";
import { prisma } from "../../utils/prisma";

export default class BusinessCaseRepository {
  async findAll(): Promise<BusinessCase[]> {
    return prisma.businessCase.findMany();
  }

  async findById(id: string): Promise<BusinessCase | null> {
    return prisma.businessCase.findUnique({ where: { id } });
  }

  async create(data: any): Promise<BusinessCase> {
    return prisma.businessCase.create({ data });
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
