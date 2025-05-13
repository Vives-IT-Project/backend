import { Milestone } from "@prisma/client";
import { prisma } from "../../utils/prisma";

export class MilestoneRepository {
  async findAll(): Promise<Milestone[]> {
    return prisma.milestone.findMany();
  }

  async findById(id: string): Promise<Milestone | null> {
    return prisma.milestone.findUnique({ where: { id } });
  }

  transformMilestone(milestone: Milestone): Milestone {
    const milestonePriority = {
      Low: 0,
      Medium: 1,
      High: 2,
      Urgent: 3,
    };
    milestone.priority =
      milestonePriority[
        milestone.priority as unknown as keyof typeof milestonePriority
      ];

    const milestoneStatus = {
      "Not Started": 0,
      "In Progress": 1,
      Completed: 2,
    };
    milestone.status =
      milestoneStatus[
        milestone.status as unknown as keyof typeof milestoneStatus
      ];
    return milestone;
  }

  async create(milestone: Milestone): Promise<Milestone> {
    console.log("Creating milestone:", milestone);
    milestone = this.transformMilestone(milestone);
    return prisma.milestone.create({ data: milestone });
  }

  async update(
    id: string,
    milestone: Partial<Milestone>,
  ): Promise<Milestone | null> {
    milestone = this.transformMilestone(milestone as Milestone);

    return prisma.milestone.update({ where: { id }, data: milestone });
  }

  async delete(id: string): Promise<void> {
    await prisma.milestone.delete({ where: { id } });
  }

  async findByBusinessCase(idBusinessCase: string): Promise<Milestone[]> {
    return prisma.milestone.findMany({
      where: { BusinessCase: { id: idBusinessCase } },
    });
  }
}
