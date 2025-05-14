import CostCenterRepository from "../../infrastructure/repositories/cost-center.repo";

export default class CostCenterService {
  private costCenterRepository = new CostCenterRepository();

  async getAllCostCenters() {
    return this.costCenterRepository.findAll();
  }

  async getCostCenterById(id: string) {
    return this.costCenterRepository.findById(id);
  }

  async createCostCenter(data: any) {
    return this.costCenterRepository.create(data);
  }

  async updateCostCenter(id: string, costCenter: any) {
    return this.costCenterRepository.update(id, costCenter);
  }
  async deleteCostCenter(id: string) {
    return this.costCenterRepository.delete(id);
  }

  async getCostCentersByOrganizationId(idOrganization: string) {
    return this.costCenterRepository.findByOrganizationId(idOrganization);
  }
}
