import { Router } from "express";
import CostCenterController from "../controllers/cost-center.controller";
import CostCenterService from "../../application/service/cost-center.service";

const router = Router();
const costCenterController = new CostCenterController(new CostCenterService());

router.get("/", costCenterController.getAllCostCenters);
router.get("/:id", costCenterController.getCostCenterById);
router.post("/", costCenterController.createCostCenter);
router.put("/:id", costCenterController.updateCostCenter);
router.delete("/:id", costCenterController.deleteCostCenter);
router.get(
  "/organization/:idOrganization",
  costCenterController.getCostCentersByOrganizationId,
);

export default router;
