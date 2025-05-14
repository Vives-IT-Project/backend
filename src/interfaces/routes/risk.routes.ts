import { Router } from "express";
import RiskController from "../controllers/risk.controller";
import RiskService from "../../application/service/risk.service";

const router = Router();
const riskController = new RiskController(new RiskService());

router.get("/", riskController.getAllRisks);
router.get("/:id", riskController.getRiskById);
router.post("/", riskController.createRisk);
router.put("/:id", riskController.updateRisk);
router.delete("/:id", riskController.deleteRisk);
router.get(
  "/business-case/:idBusinessCase",
  riskController.getRisksByBusinessCaseId,
);

export default router;
