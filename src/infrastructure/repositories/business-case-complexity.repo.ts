import { PrismaClient, BusinessCaseComplexity } from "@prisma/client";

const prisma = new PrismaClient();


export class BusinessCaseComplexityRepository {
  async findAll(): Promise<BusinessCaseComplexity[]> {
    return prisma.businessCaseComplexity.findMany();
  }

  async findById(id: string): Promise<BusinessCaseComplexity | null> {
    return prisma.businessCaseComplexity.findUnique({ where: { id } });
  }

  async create(businessCaseComplexity: BusinessCaseComplexity): Promise<BusinessCaseComplexity> {
    console.log("Creating complexity:", businessCaseComplexity);
    return prisma.businessCaseComplexity.create({ data: businessCaseComplexity });
  }

  async update(id: string, businessCaseComplexity: Partial<BusinessCaseComplexity>): Promise<BusinessCaseComplexity | null> {
    return prisma.businessCaseComplexity.update({ where: { id }, data: businessCaseComplexity });
  }

  async delete(id: string): Promise<void> {
    await prisma.businessCaseComplexity.delete({ where: { id } });
  }

  // async findByBusinessCaseId(idBusinessCase: string): Promise<BusinessCaseComplexity[]> {
  //   return prisma.businessCaseComplexity.findMany({
  //     where: { BusinessCase: { id: idBusinessCase } },
  //   });
  // }
}
