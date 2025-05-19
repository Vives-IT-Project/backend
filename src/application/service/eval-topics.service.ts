import EvaluationTopicsRepository from "../../infrastructure/repositories/eval-topics.repo";

export default class EvaluationTopicService {
  private evaluationTopicRepository = new EvaluationTopicsRepository();

  async getAllEvaluationTopics() {
    return this.evaluationTopicRepository.findAll();
  }

  async getEvaluationTopicById(id: string) {
    return this.evaluationTopicRepository.findById(id);
  }

  async createEvaluationTopic(data: any) {
    return this.evaluationTopicRepository.create(data);
  }

  async updateEvaluationTopic(id: string, evaluationTopic: any) {
    return this.evaluationTopicRepository.update(id, evaluationTopic);
  }
  async deleteEvaluationTopic(id: string) {
    return this.evaluationTopicRepository.delete(id);
  }

  async getEvaluationTopicsByOrganizationId(idOrganization: string) {
    return this.evaluationTopicRepository.findByOrganizationId(idOrganization);
  }
}
