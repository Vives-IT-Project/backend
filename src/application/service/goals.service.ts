import GoalRepository from "../../infrastructure/repositories/goals.repo";

export default class GoalService {
  private goalRepository = new GoalRepository();

  async getAllGoals() {
    return this.goalRepository.findAll();
  }

  async getGoalById(id: string) {
    return this.goalRepository.findById(id);
  }

  async createGoal(name: string, organizationId: string) {
    return this.goalRepository.create(name, organizationId);
  }

  async updateGoal(id: string, goal: any) {
    return this.goalRepository.update(id, goal);
  }
  async deleteGoal(id: string) {
    return this.goalRepository.delete(id);
  }

  async getGoalsByOrganizationId(idOrganization: string) {
    return this.goalRepository.findByOrganizationId(idOrganization);
  }
}
