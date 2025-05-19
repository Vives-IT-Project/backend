import { BenefitRepository } from "../../infrastructure/repositories/benefit.repo";

export default class BenefitService {
  private milestoneRepository = new BenefitRepository();

  async getAllBenefits() {
    return this.milestoneRepository.findAll();
  }

  async getBenefitById(id: string) {
    return this.milestoneRepository.findById(id);
  }

  async createBenefit(data: any) {
    return this.milestoneRepository.create(data);
  }

  async updateBenefit(id: string, milestone: any) {
    return this.milestoneRepository.update(id, milestone);
  }
  async deleteBenefit(id: string) {
    return this.milestoneRepository.delete(id);
  }

  async getBenefitsByBusinessCaseId(idOrganization: string) {
    return this.milestoneRepository.findByBusinessCase(idOrganization);
  }
}
