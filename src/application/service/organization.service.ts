import OrganizationRepository from "../../infrastructure/repositories/organization.repo";

export default class OrganizationService {
  private organizationRepository = new OrganizationRepository();

  async getAllOrganizations() {
    return this.organizationRepository.findAll();
  }

  async getOrganizationById(id: string) {
    return this.organizationRepository.findById(id);
  }

  async createOrganization(goal: any) {
    return this.organizationRepository.create(goal);
  }

  async updateOrganization(id: string, goal: any) {
    return this.organizationRepository.update(id, goal);
  }

  async deleteOrganization(id: string) {
    return this.organizationRepository.delete(id);
  }
}
