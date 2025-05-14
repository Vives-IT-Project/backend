import { BusinessCaseComplexityRepository } from "../../infrastructure/repositories/business-case-complexity.repo";

export class BusinessCaseComplexityService {
  private businessCaseComplexityRepository = new BusinessCaseComplexityRepository();

  async getAllBusinessCaseComplexities() {
    return this.businessCaseComplexityRepository.findAll();
  }

  async getBusinessCaseComplexityById(id: string) {
    return this.businessCaseComplexityRepository.findById(id);
  }

  async createBusinessCaseComplexity(data: any) {
    let result = this.businessCaseComplexityRepository.create(data);
    return result
  }

  async updateBusinessCaseComplexity(id: string, data: any) {
    return this.businessCaseComplexityRepository.update(id, data);
  }

  async deleteBusinessCaseComplexity(id: string) {
    return this.businessCaseComplexityRepository.delete(id);
  }

  
}
