import { Request, Response } from "express";
import BenefitService from "../../application/service/benefit.service";

export default class BenefitController {
  private benefitService: BenefitService;
  constructor(private service: BenefitService) {
    this.benefitService = service;
  }

  getAllBenefits = async (_req: Request, res: Response) => {
    const benefits = await this.benefitService.getAllBenefits();
    res.json(benefits);
    return;
  };

  getBenefitById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const benefit = await this.benefitService.getBenefitById(id);
      if (!benefit) {
        res.status(404).json({ message: "Benefit not found" });
      } else {
        res.json(benefit);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  createBenefit = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const createdBenefit = await this.benefitService.createBenefit(data);
      res.status(201).json(createdBenefit);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  updateBenefit = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedBenefit = req.body;
      const goal = await this.benefitService.updateBenefit(id, updatedBenefit);
      if (!goal) {
        res.status(404).json({ message: "Benefit not found" });
      } else {
        res.json(goal);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  deleteBenefit = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedBenefit = await this.benefitService.deleteBenefit(id);
      if (deletedBenefit === null) {
        res.status(404).json({ message: "Benefit not found" });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getBenefitsByBusinessCaseId = async (req: Request, res: Response) => {
    try {
      const { idBusinessCase } = req.params;
      const benefits =
        await this.benefitService.getBenefitsByBusinessCaseId(idBusinessCase);
      if (!benefits) {
        res
          .status(204)
          .json({ message: "No Benefits found for this business case" });
      } else {
        res.json(benefits);
      }
    } catch (error) {
      console.error("Error fetching benefits by business case ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
