import { Request, Response } from "express";
import MilestoneService from "../../application/service/milestone.service";

export default class MilestoneController {
  private milestoneService: MilestoneService;
  constructor(private service: MilestoneService) {
    this.milestoneService = service;
  }

  getAllMilestones = async (_req: Request, res: Response) => {
    const milestones = await this.milestoneService.getAllMilestones();
    res.json(milestones);
    return;
  };

  getMilestoneById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const milestone = await this.milestoneService.getMilestoneById(id);
      if (!milestone) {
        res.status(404).json({ message: "Milestone not found" });
      } else {
        res.json(milestone);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  createMilestone = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const createdMilestone =
        await this.milestoneService.createMilestone(data);
      res.status(201).json(createdMilestone);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  updateMilestone = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedMilestone = req.body;
      const goal = await this.milestoneService.updateMilestone(
        id,
        updatedMilestone,
      );
      if (!goal) {
        res.status(404).json({ message: "Milestone not found" });
      } else {
        res.json(goal);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  deleteMilestone = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedMilestone = await this.milestoneService.deleteMilestone(id);
      if (deletedMilestone === null) {
        res.status(404).json({ message: "Milestone not found" });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getMilestonesByBusinessCaseId = async (req: Request, res: Response) => {
    try {
      const { idBusinessCase } = req.params;
      const milestones =
        await this.milestoneService.getMilestonesByBusinessCaseId(
          idBusinessCase,
        );
      if (!milestones) {
        res
          .status(204)
          .json({ message: "No Milestones found for this business case" });
      } else {
        res.json(milestones);
      }
    } catch (error) {
      console.error("Error fetching milestones by business case ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
