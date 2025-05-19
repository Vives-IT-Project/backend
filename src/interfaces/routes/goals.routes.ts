import { Router } from "express";
import GoalController from "../controllers/goals.controller";
import GoalService from "../../application/service/goals.service";

const router = Router();
const goalController = new GoalController(new GoalService());

router.get("/", goalController.getAllGoals);
router.get("/:id", goalController.getGoalById);
router.post("/", goalController.createGoal);
router.put("/:id", goalController.updateGoal);
router.delete("/:id", goalController.deleteGoal);
router.get(
  "/organization/:idOrganization",
  goalController.getGoalsByOrganizationId,
);

export default router;
