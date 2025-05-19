import { MilestoneRepository } from "../../infrastructure/repositories/milestone.repo ";

export default class MilestoneService {
  private milestoneRepository = new MilestoneRepository();

  async getAllMilestones() {
    return this.milestoneRepository.findAll();
  }

  async getMilestoneById(id: string) {
    return this.milestoneRepository.findById(id);
  }

  async createMilestone(data: any) {
    return this.milestoneRepository.create(data);
  }

  async updateMilestone(id: string, milestone: any) {
    return this.milestoneRepository.update(id, milestone);
  }
  async deleteMilestone(id: string) {
    return this.milestoneRepository.delete(id);
  }

  async getMilestonesByBusinessCaseId(idOrganization: string) {
    return this.milestoneRepository.findByBusinessCase(idOrganization);
  }
}
