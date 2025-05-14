import { ComplexityRepository } from "../../infrastructure/repositories/complexities.repo";

export class ComplexityService {
  private complexityRepository = new ComplexityRepository();

  async getAllComplexities() {
    return this.complexityRepository.findAll();
  }

  async getComplexityById(id: string) {
    return this.complexityRepository.findById(id);
  }

  async createComplexity(data: any) {
    let result = this.complexityRepository.create(data);
    return result
  }

  async updateComplexity(id: string, data: any) {
    return this.complexityRepository.update(id, data);
  }

  async deleteComplexity(id: string) {
    return this.complexityRepository.delete(id);
  }

  
}
