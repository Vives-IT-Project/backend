import { Actor } from "@prisma/client";
import { prisma } from "../../utils/prisma";

export class ActorRepository {
  async findAll(): Promise<Actor[]> {
    return prisma.actor.findMany();
  }

  async findById(id: string): Promise<Actor | null> {
    return prisma.actor.findUnique({ where: { id } });
  }

  async create(actor: Actor): Promise<Actor> {
    console.log("Creating actor:", actor);
    return prisma.actor.create({ data: actor });
  }

  async update(id: string, actor: Partial<Actor>): Promise<Actor | null> {
    return prisma.actor.update({ where: { id }, data: actor });
  }

  async delete(id: string): Promise<void> {
    await prisma.actor.delete({ where: { id } });
  }

  async findByOrganizationId(idOrganization: string): Promise<Actor[]> {
    return prisma.actor.findMany({
      where: { Organization: { id: idOrganization } },
    });
  }
}
