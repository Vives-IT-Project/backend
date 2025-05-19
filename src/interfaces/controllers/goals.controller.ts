import { Request, Response } from "express";
import GoalService from "../../application/service/goals.service";

export default class GoalController {
  private goalService: GoalService;
  constructor(private service: GoalService) {
    this.goalService = service;
  }

  getAllGoals = async (_req: Request, res: Response) => {
    const goals = await this.goalService.getAllGoals();
    res.json(goals);
    return;
  };

  getGoalById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const goal = await this.goalService.getGoalById(id);
      if (!goal) {
        res.status(404).json({ message: "Goal not found" });
      } else {
        res.json(goal);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  createGoal = async (req: Request, res: Response) => {
    try {
      const { name, idOrganization } = req.body;
      if (!name || !idOrganization) {
        res
          .status(400)
          .json({ message: "Name and organization ID are required" });
        return;
      }
      const createdGoal = await this.goalService.createGoal(
        name,
        idOrganization,
      );
      res.status(201).json(createdGoal);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  updateGoal = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedGoal = req.body;
      const goal = await this.goalService.updateGoal(id, updatedGoal);
      if (!goal) {
        res.status(404).json({ message: "Goal not found" });
      } else {
        res.json(goal);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  deleteGoal = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedGoal = await this.goalService.deleteGoal(id);
      if (deletedGoal === null) {
        res.status(404).json({ message: "Goal not found" });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getGoalsByOrganizationId = async (req: Request, res: Response) => {
    try {
      const { idOrganization } = req.params;
      const goals =
        await this.goalService.getGoalsByOrganizationId(idOrganization);
      if (!goals) {
        res
          .status(404)
          .json({ message: "No goals found for this organization" });
      } else {
        res.json(goals);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
