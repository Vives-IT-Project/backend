import DomainRepository from "../../infrastructure/repositories/domain.repo";

export default class DomainService {
  private domainRepository = new DomainRepository();

  async getAllDomains() {
    return this.domainRepository.findAll();
  }

  async getDomainById(id: string) {
    return this.domainRepository.findById(id);
  }

  async createDomain(name: string, organizationId: string) {
    return this.domainRepository.create(name, organizationId);
  }

  async updateDomain(id: string, domain: any) {
    return this.domainRepository.update(id, domain);
  }
  async deleteDomain(id: string) {
    return this.domainRepository.delete(id);
  }

  async getDomainsByOrganizationId(idOrganization: string) {
    return this.domainRepository.findByOrganizationId(idOrganization);
  }
}
