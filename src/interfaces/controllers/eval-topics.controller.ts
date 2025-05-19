import { Request, Response } from "express";
import EvaluationTopicService from "../../application/service/eval-topics.service";

export default class EvaluationTopicController {
  private evaluationTopicService: EvaluationTopicService;
  constructor(private service: EvaluationTopicService) {
    this.evaluationTopicService = service;
  }

  getAllEvaluationTopics = async (_req: Request, res: Response) => {
    const evaluationTopics =
      await this.evaluationTopicService.getAllEvaluationTopics();
    res.json(evaluationTopics);
    return;
  };

  getEvaluationTopicById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const goal = await this.evaluationTopicService.getEvaluationTopicById(id);
      if (!goal) {
        res.status(404).json({ message: "Evaluation Topic not found" });
      } else {
        res.json(goal);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  createEvaluationTopic = async (req: Request, res: Response) => {
    try {
      const evalTopic = req.body;
      const createdEvaluationTopic =
        await this.evaluationTopicService.createEvaluationTopic(evalTopic);
      res.status(201).json(createdEvaluationTopic);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  updateEvaluationTopic = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedEvaluationTopic = req.body;
      const goal = await this.evaluationTopicService.updateEvaluationTopic(
        id,
        updatedEvaluationTopic,
      );
      if (!goal) {
        res.status(404).json({ message: "Evaluation Topic not found" });
      } else {
        res.json(goal);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  deleteEvaluationTopic = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedEvaluationTopic =
        await this.evaluationTopicService.deleteEvaluationTopic(id);
      if (deletedEvaluationTopic === null) {
        res.status(404).json({ message: "EvaluationTopic not found" });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getEvaluationTopicsByOrganizationId = async (req: Request, res: Response) => {
    try {
      const { idOrganization } = req.params;
      const evaluationTopics =
        await this.evaluationTopicService.getEvaluationTopicsByOrganizationId(
          idOrganization,
        );
      if (!evaluationTopics) {
        res.status(404).json({
          message: "No Evaluation Topics found for this organization",
        });
      } else {
        res.json(evaluationTopics);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
