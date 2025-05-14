import { Request, Response } from "express";
import { BusinessCaseComplexityService } from "../../application/service/business-case-complexity.service";

export class BusinessCaseComplexityController {
  private businessCaseComplexityService: BusinessCaseComplexityService;
  constructor(private service: BusinessCaseComplexityService) {
    this.businessCaseComplexityService = service;
  }

  getAllBusinessCaseComplexities = async (_req: Request, res: Response) => {
    const businessCaseComplexities = await this.businessCaseComplexityService.getAllBusinessCaseComplexities();
    res.json(businessCaseComplexities);
  };

  getBusinessCaseComplexityById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const businessCaseComplexity = await this.businessCaseComplexityService.getBusinessCaseComplexityById(id);
      if (!businessCaseComplexity) {
        res.status(404).json({ message: "Business case complexity not found" });
      } else {
        res.json(businessCaseComplexity);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
// "note" INTEGER NOT NULL,
//     "final_note" INTEGER NOT NULL,
//     "idBusinessCase" TEXT NOT NULL,
//     "idComplexity" TEXT NOT NULL,

  createBusinessCaseComplexity = async (req: Request, res: Response) => {
    try {
      const { note, idBusinessCase, idComplexity, final_note } = req.body;
      if (!note || !idBusinessCase || !idComplexity ||!final_note ) {
        res.status(400).json({ message: "Missing required fields" });
        return;
      }
      const newBusinessCaseComplexity = await this.businessCaseComplexityService.createBusinessCaseComplexity({
        note,
        final_note,
        idBusinessCase,
        idComplexity
      });
      res.status(201).json(newBusinessCaseComplexity);
    } catch (error) {
      res.status(400).json({ message: "Bad request" });
    }
  };

  updateBusinessCaseComplexity = async (req: Request, res: Response) => {
    const updatedBusinessCaseComplexity = await this.businessCaseComplexityService.updateBusinessCaseComplexity(
      req.params.id,
      req.body,
    );
    res.json(updatedBusinessCaseComplexity);
  };

  deleteBusinessCaseComplexity = async (req: Request, res: Response) => {
    await this.businessCaseComplexityService.deleteBusinessCaseComplexity(req.params.id);
    res.status(204).send();
  };

}
