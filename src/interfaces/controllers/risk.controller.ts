import { Request, Response } from "express";
import RiskService from "../../application/service/risk.service";

export default class RiskController {
  private riskService: RiskService;
  constructor(private service: RiskService) {
    this.riskService = service;
  }

  getAllRisks = async (_req: Request, res: Response) => {
    const risks = await this.riskService.getAllRisks();
    res.json(risks);
    return;
  };

  getRiskById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const risk = await this.riskService.getRiskById(id);
      if (!risk) {
        res.status(404).json({ message: "Risk not found" });
      } else {
        res.json(risk);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  createRisk = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const createdRisk = await this.riskService.createRisk(data);
      res.status(201).json(createdRisk);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  updateRisk = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedRisk = req.body;
      const goal = await this.riskService.updateRisk(id, updatedRisk);
      if (!goal) {
        res.status(404).json({ message: "Risk not found" });
      } else {
        res.json(goal);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  deleteRisk = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedRisk = await this.riskService.deleteRisk(id);
      if (deletedRisk === null) {
        res.status(404).json({ message: "Risk not found" });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getRisksByBusinessCaseId = async (req: Request, res: Response) => {
    try {
      const { idBusinessCase } = req.params;
      const risks =
        await this.riskService.getRisksByBusinessCaseId(idBusinessCase);
      if (!risks) {
        res
          .status(204)
          .json({ message: "No Risks found for this business case" });
      } else {
        res.json(risks);
      }
    } catch (error) {
      console.error("Error fetching risks by business case ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
