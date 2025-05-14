import { Router } from "express";
import ActorController from "../controllers/actor.controller";
import ActorService from "../../application/service/actor.service";

const router = Router();
const actorController = new ActorController(new ActorService());

router.get("/", actorController.getAllActors);
router.get("/:id", actorController.getActorById);
router.post("/", actorController.createActor);
router.put("/:id", actorController.updateActor);
router.delete("/:id", actorController.deleteActor);
router.get(
  "/organization/:idOrganization",
  actorController.getActorsByOrganizationId,
);

export default router;
