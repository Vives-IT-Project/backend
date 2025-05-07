import { Request, Response } from "express";
import BusinessCaseService from "../../application/service/business-case.service";

export default class BusinessCaseController {
  private businessCaseService: BusinessCaseService;
  constructor(private service: BusinessCaseService) {
    this.businessCaseService = service;
  }

  getAllBusinessCases = async (_req: Request, res: Response) => {
    const businessCases = await this.businessCaseService.getAllBusinessCases();
    res.json(businessCases);
    return;
  };

  getBusinessCaseById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const goal = await this.businessCaseService.getBusinessCaseById(id);
      if (!goal) {
        res.status(404).json({ message: "Business Case not found" });
      } else {
        res.json(goal);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  createBusinessCase = async (req: Request, res: Response) => {
    try {
      const { data } = req.body;

      const createdBusinessCase =
        await this.businessCaseService.createBusinessCase(data);
      res.status(201).json(createdBusinessCase);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  updateBusinessCase = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedBusinessCase = req.body;
      const goal = await this.businessCaseService.updateBusinessCase(
        id,
        updatedBusinessCase,
      );
      if (!goal) {
        res.status(404).json({ message: "Business Case not found" });
      } else {
        res.json(goal);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  deleteBusinessCase = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedBusinessCase =
        await this.businessCaseService.deleteBusinessCase(id);
      if (deletedBusinessCase === null) {
        res.status(404).json({ message: "Business Case not found" });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getBusinessCasesByOrganizationId = async (req: Request, res: Response) => {
    try {
      const { idOrganization } = req.params;
      const businessCases =
        await this.businessCaseService.getBusinessCasesByOrganizationId(
          idOrganization,
        );
      if (!businessCases) {
        res
          .status(404)
          .json({ message: "No Business Cases found for this organization" });
      } else {
        res.json(businessCases);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
