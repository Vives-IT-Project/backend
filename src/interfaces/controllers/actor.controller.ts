import { Request, Response } from "express";
import ActorService from "../../application/service/actor.service";

export default class ActorController {
  private actorService: ActorService;
  constructor(private service: ActorService) {
    this.actorService = service;
  }

  getAllActors = async (_req: Request, res: Response) => {
    const actors = await this.actorService.getAllActors();
    res.json(actors);
    return;
  };

  getActorById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const actor = await this.actorService.getActorById(id);
      if (!actor) {
        res.status(404).json({ message: "Actor not found" });
      } else {
        res.json(actor);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  createActor = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const createdActor = await this.actorService.createActor(data);
      res.status(201).json(createdActor);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  updateActor = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedActor = req.body;
      const goal = await this.actorService.updateActor(id, updatedActor);
      if (!goal) {
        res.status(404).json({ message: "Actor not found" });
      } else {
        res.json(goal);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  deleteActor = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedActor = await this.actorService.deleteActor(id);
      if (deletedActor === null) {
        res.status(404).json({ message: "Actor not found" });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getActorsByOrganizationId = async (req: Request, res: Response) => {
    try {
      const { idOrganization } = req.params;
      const actors =
        await this.actorService.getActorsByOrganizationId(idOrganization);
      if (!actors) {
        res
          .status(404)
          .json({ message: "No Actors found for this organization" });
      } else {
        res.json(actors);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
