import { Router } from "express";
import { BusinessCaseComplexityController } from "../controllers/business-case-complexity.controller";
import { BusinessCaseComplexityService } from "../../application/service/business-case-complexity.service";

const router = Router();
const businessCaseComplexityController = new BusinessCaseComplexityController(new BusinessCaseComplexityService());

router.get("/", businessCaseComplexityController.getAllBusinessCaseComplexities);
router.get("/:id", businessCaseComplexityController.getBusinessCaseComplexityById);
router.post("/", businessCaseComplexityController.createBusinessCaseComplexity);
router.put("/:id", businessCaseComplexityController.updateBusinessCaseComplexity);
router.delete("/:id", businessCaseComplexityController.deleteBusinessCaseComplexity);


export default router;
