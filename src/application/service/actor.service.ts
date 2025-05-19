import { ActorRepository } from "../../infrastructure/repositories/actor.repo";

export default class ActorService {
  private actorRepository = new ActorRepository();

  async getAllActors() {
    return this.actorRepository.findAll();
  }

  async getActorById(id: string) {
    return this.actorRepository.findById(id);
  }

  async createActor(data: any) {
    return this.actorRepository.create(data);
  }

  async updateActor(id: string, actor: any) {
    return this.actorRepository.update(id, actor);
  }
  async deleteActor(id: string) {
    return this.actorRepository.delete(id);
  }

  async getActorsByOrganizationId(idOrganization: string) {
    return this.actorRepository.findByOrganizationId(idOrganization);
  }
}
