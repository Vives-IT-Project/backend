import { Request, Response } from "express";
import OrganizationService from "../../application/service/organization.service";

export default class OrganizationController {
  private organizationService: OrganizationService;
  constructor(private service: OrganizationService) {
    this.organizationService = service;
  }

  getAllOrganizations = async (_req: Request, res: Response) => {
    const organizations = await this.organizationService.getAllOrganizations();
    res.json(organizations);
    return;
  };

  getOrganizationById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const organization =
        await this.organizationService.getOrganizationById(id);
      if (!organization) {
        res.status(404).json({ message: "Organization not found" });
      } else {
        res.json(organization);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  createOrganization = async (req: Request, res: Response) => {
    try {
      const newOrganization = req.body;
      console.log("ORG DATA", newOrganization);
      const createdOrganization =
        await this.organizationService.createOrganization(newOrganization);
      res.status(201).json(createdOrganization);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  updateOrganization = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedOrganization = req.body;
      const organization = await this.organizationService.updateOrganization(
        id,
        updatedOrganization,
      );
      if (!organization) {
        res.status(404).json({ message: "Organization not found" });
      } else {
        res.json(organization);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  deleteOrganization = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedOrganization =
        await this.organizationService.deleteOrganization(id);
      if (deletedOrganization === null) {
        res.status(404).json({ message: "Organization not found" });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
