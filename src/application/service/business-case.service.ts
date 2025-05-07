import BusinessCaseRepository from "../../infrastructure/repositories/business-case.repo";

export default class BusinessCaseService {
  private businessCaseRepository = new BusinessCaseRepository();

  async getAllBusinessCases() {
    return this.businessCaseRepository.findAll();
  }

  async getBusinessCaseById(id: string) {
    return this.businessCaseRepository.findById(id);
  }

  async createBusinessCase(data: any) {
    return this.businessCaseRepository.create(data);
  }

  async updateBusinessCase(id: string, businessCase: any) {
    return this.businessCaseRepository.update(id, businessCase);
  }
  async deleteBusinessCase(id: string) {
    return this.businessCaseRepository.delete(id);
  }

  async getBusinessCasesByOrganizationId(idOrganization: string) {
    return this.businessCaseRepository.findByOrganizationId(idOrganization);
  }
}
