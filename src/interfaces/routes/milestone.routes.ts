import { Router } from "express";
import MilestoneController from "../controllers/milestone.controller";
import MilestoneService from "../../application/service/milestone.service";

const router = Router();
const milestoneController = new MilestoneController(new MilestoneService());

router.get("/", milestoneController.getAllMilestones);
router.get("/:id", milestoneController.getMilestoneById);
router.post("/", milestoneController.createMilestone);
router.put("/:id", milestoneController.updateMilestone);
router.delete("/:id", milestoneController.deleteMilestone);
router.get(
  "/business-case/:idBusinessCase",
  milestoneController.getMilestonesByBusinessCaseId,
);

export default router;
