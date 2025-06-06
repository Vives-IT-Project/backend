import { Request, Response } from "express";
import { ComplexityService } from "../../application/service/complexities.service";

export class ComplexityController {
  private complexityService: ComplexityService;
  constructor(private service: ComplexityService) {
    this.complexityService = service;
  }

  getAllComplexities = async (_req: Request, res: Response) => {
    const complexities = await this.complexityService.getAllComplexities();
    res.json(complexities);
  };

  getComplexityById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const complexity = await this.complexityService.getComplexityById(id);
      if (!complexity) {
        res.status(404).json({ message: "Complexity not found" });
      } else {
        res.json(complexity);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  createComplexity = async (req: Request, res: Response) => {
    try {
      const { name, weight } = req.body;
      if (!name || !weight ) {
        res.status(400).json({ message: "Missing required fields" });
        return;
      }
      const newComplexity = await this.complexityService.createComplexity({
        name,
        weight,
      });
      res.status(201).json(newComplexity);
    } catch (error) {
      res.status(400).json({ message: "Bad request" });
    }
  };

  updateComplexity = async (req: Request, res: Response) => {
    const updatedComplexity = await this.complexityService.updateComplexity(
      req.params.id,
      req.body,
    );
    res.json(updatedComplexity);
  };

  deleteComplexity = async (req: Request, res: Response) => {
    await this.complexityService.deleteComplexity(req.params.id);
    res.status(204).send();
  };

  getFirstComplexity =  () => {
    return 50
  }


  getSecondComplexity =  () => {
    const teamSize = 5;
    const roles = 3; 
    const allocation = 10; 

    const roleComplexity = roles * (teamSize -1);
    const communicationComplexity = (teamSize*(teamSize -1 )) / 2;
    const simplicityFactor = 1/allocation;

    const complexity = (roleComplexity + communicationComplexity) / simplicityFactor
    return complexity;
  }

  getFinalComplexity = async (req: Request, res:Response) => {
    console.log();
    const time = 30;
    const complexity = ((this.getFirstComplexity() * 70) + (this.getSecondComplexity() * 30)) / time;
  }
}
