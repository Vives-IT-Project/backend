import { Organization } from "@prisma/client";
import { prisma } from "../../utils/prisma";

export default class OrganizationRepository {
  async findAll(): Promise<Organization[]> {
    return prisma.organization.findMany();
  }

  async findById(id: string): Promise<Organization | null> {
    return prisma.organization.findUnique({ where: { id } });
  }

  async create(organization: Organization): Promise<Organization> {
    console.log("Creating organization:", organization);
    return prisma.organization.create({ data: organization });
  }

  async update(
    id: string,
    organization: Partial<Organization>,
  ): Promise<Organization | null> {
    return prisma.organization.update({ where: { id }, data: organization });
  }

  async delete(id: string): Promise<void> {
    await prisma.organization.delete({ where: { id } });
  }
}
