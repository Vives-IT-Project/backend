import { Domain } from "@prisma/client";
import { prisma } from "../../utils/prisma";

export default class DomainRepository {
  async findAll(): Promise<Domain[]> {
    return prisma.domain.findMany();
  }

  async findById(id: string): Promise<Domain | null> {
    return prisma.domain.findUnique({ where: { id } });
  }

  async create(name: string, idOrganization: string): Promise<Domain> {
    console.log("Creating domain:", name);
    return prisma.domain.create({ data: { name, idOrganization } });
  }

  async update(id: string, domain: Partial<Domain>): Promise<Domain | null> {
    return prisma.domain.update({ where: { id }, data: domain });
  }

  async delete(id: string): Promise<void> {
    await prisma.domain.deleteMany({ where: { id } });
  }

  async findByOrganizationId(idOrganization: string): Promise<Domain[]> {
    return prisma.domain.findMany({
      where: { Organization: { id: idOrganization } },
    });
  }
}
