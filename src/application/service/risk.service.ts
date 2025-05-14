import { RiskRepository } from "../../infrastructure/repositories/risk.repo";

export default class RiskService {
  private riskRepository = new RiskRepository();

  async getAllRisks() {
    return this.riskRepository.findAll();
  }

  async getRiskById(id: string) {
    return this.riskRepository.findById(id);
  }

  async createRisk(data: any) {
    return this.riskRepository.create(data);
  }

  async updateRisk(id: string, risk: any) {
    return this.riskRepository.update(id, risk);
  }
  async deleteRisk(id: string) {
    return this.riskRepository.delete(id);
  }

  async getRisksByBusinessCaseId(idBusinessCase: string) {
    return this.riskRepository.findByBusinessCase(idBusinessCase);
  }
}
