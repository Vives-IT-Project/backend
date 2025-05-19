import { CostCenter } from "@prisma/client";
import { prisma } from "../../utils/prisma";

export default class CostCenterRepository {
  async findAll(): Promise<CostCenter[]> {
    return prisma.costCenter.findMany();
  }

  async findById(id: string): Promise<CostCenter | null> {
    return prisma.costCenter.findUnique({ where: { id } });
  }

  async create(data: any): Promise<CostCenter> {
    return prisma.costCenter.create({ data });
  }

  async update(
    id: string,
    costCenter: Partial<CostCenter>,
  ): Promise<CostCenter | null> {
    return prisma.costCenter.update({ where: { id }, data: costCenter });
  }

  async delete(id: string): Promise<void> {
    await prisma.costCenter.deleteMany({ where: { id } });
  }

  async findByOrganizationId(idOrganization: string): Promise<CostCenter[]> {
    return prisma.costCenter.findMany({
      where: { Organization: { id: idOrganization } },
    });
  }
}
