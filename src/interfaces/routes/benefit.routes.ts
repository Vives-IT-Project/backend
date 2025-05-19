import { Router } from "express";
import BenefitController from "../controllers/benefit.controller";
import BenefitService from "../../application/service/benefit.service";

const router = Router();
const benefitController = new BenefitController(new BenefitService());

router.get("/", benefitController.getAllBenefits);
router.get("/:id", benefitController.getBenefitById);
router.post("/", benefitController.createBenefit);
router.put("/:id", benefitController.updateBenefit);
router.delete("/:id", benefitController.deleteBenefit);
router.get(
  "/business-case/:idBusinessCase",
  benefitController.getBenefitsByBusinessCaseId,
);

export default router;
