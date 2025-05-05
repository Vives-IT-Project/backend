import { Request, Response } from "express";
import CostCenterService from "../../application/service/cost-center.service";

export default class CostCenterController {
  private costCenterService: CostCenterService;
  constructor(private service: CostCenterService) {
    this.costCenterService = service;
  }

  getAllCostCenters = async (_req: Request, res: Response) => {
    const costCenters = await this.costCenterService.getAllCostCenters();
    res.json(costCenters);
    return;
  };

  getCostCenterById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const costCenter = await this.costCenterService.getCostCenterById(id);
      if (!costCenter) {
        res.status(404).json({ message: "Cost Center not found" });
      } else {
        res.json(costCenter);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  createCostCenter = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const createdCostCenter =
        await this.costCenterService.createCostCenter(data);
      res.status(201).json(createdCostCenter);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  updateCostCenter = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedCostCenter = req.body;
      const goal = await this.costCenterService.updateCostCenter(
        id,
        updatedCostCenter,
      );
      if (!goal) {
        res.status(404).json({ message: "Cost Center not found" });
      } else {
        res.json(goal);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  deleteCostCenter = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedCostCenter =
        await this.costCenterService.deleteCostCenter(id);
      if (deletedCostCenter === null) {
        res.status(404).json({ message: "Cost Center not found" });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getCostCentersByOrganizationId = async (req: Request, res: Response) => {
    try {
      const { idOrganization } = req.params;
      const costCenters =
        await this.costCenterService.getCostCentersByOrganizationId(
          idOrganization,
        );
      if (!costCenters) {
        res
          .status(404)
          .json({ message: "No Cost Centers found for this organization" });
      } else {
        res.json(costCenters);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
