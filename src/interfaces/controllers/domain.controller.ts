import { Request, Response } from "express";
import DomainService from "../../application/service/domains.service";

export default class DomainController {
  private domainService: DomainService;
  constructor(private service: DomainService) {
    this.domainService = service;
  }

  getAllDomains = async (_req: Request, res: Response) => {
    const domains = await this.domainService.getAllDomains();
    res.json(domains);
    return;
  };

  getDomainById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const goal = await this.domainService.getDomainById(id);
      if (!goal) {
        res.status(404).json({ message: "Domain not found" });
      } else {
        res.json(goal);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  createDomain = async (req: Request, res: Response) => {
    try {
      const { name, idOrganization } = req.body;
      if (!name || !idOrganization) {
        res
          .status(400)
          .json({ message: "Name and organization ID are required" });
        return;
      }
      const createdDomain = await this.domainService.createDomain(
        name,
        idOrganization,
      );
      res.status(201).json(createdDomain);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  updateDomain = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedDomain = req.body;
      const goal = await this.domainService.updateDomain(id, updatedDomain);
      if (!goal) {
        res.status(404).json({ message: "Domain not found" });
      } else {
        res.json(goal);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  deleteDomain = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedDomain = await this.domainService.deleteDomain(id);
      if (deletedDomain === null) {
        res.status(404).json({ message: "Domain not found" });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getDomainsByOrganizationId = async (req: Request, res: Response) => {
    try {
      const { idOrganization } = req.params;
      const domains =
        await this.domainService.getDomainsByOrganizationId(idOrganization);
      if (!domains) {
        res
          .status(404)
          .json({ message: "No domains found for this organization" });
      } else {
        res.json(domains);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
