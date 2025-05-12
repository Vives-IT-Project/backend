import { Request, Response } from "express";
import BusinessCaseService from "../../application/service/business-case.service";
import { UserService } from "../../application/service/users.service";

export default class BusinessCaseController {
  private businessCaseService: BusinessCaseService;
  private userService: UserService;
  constructor(bcService: BusinessCaseService, userService: UserService) {
    this.businessCaseService = bcService;
    this.userService = userService;
  }

  getAllBusinessCases = async (_req: Request, res: Response) => {
    const businessCases = await this.businessCaseService.getAllBusinessCases();
    res.json(businessCases);
    return;
  };

  getAllTemplates = async (_req: Request, res: Response) => {
    const templates = await this.businessCaseService.getAllTemplates();
    res.json(templates);
    return;
  };

  getTemplateDataById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const template = await this.businessCaseService.getTemplateDataById(id);
      if (!template) {
        res.status(404).json({ message: "Template not found" });
      } else {
        res.json(template);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
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
      const {
        name,
        description,
        idOrganization,
        idProject,
        isTemplate,
        idTemplate,
        createdBy,
      } = req.body;
      console.log("data", name);

      const user = await this.userService.getUserById(createdBy);
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      const createdBusinessCase =
        await this.businessCaseService.createBusinessCase({
          name,
          description,
          idOrganization,
          idProject,
          isTemplate,
          idTemplate,
          createdBy,
        });
      res.status(201).json(createdBusinessCase);
    } catch (error: any) {
      console.error("Error creating business case", error);
      res.status(500).json({ message: error.message });
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
    } catch (error: any) {
      res.status(500).json({ message: error.message });
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
