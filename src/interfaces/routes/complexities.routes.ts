import { Router } from "express";
import { ComplexityController } from "../controllers/complexities.controller";
import { ComplexityService } from "../../application/service/complexities.service";

const router = Router();
const complexityController = new ComplexityController(new ComplexityService());

router.get("/", complexityController.getAllComplexities);
router.get("/:id", complexityController.getComplexityById);
router.post("/", complexityController.createComplexity);
router.put("/:id", complexityController.updateComplexity);
router.delete("/:id", complexityController.deleteComplexity);


export default router;
