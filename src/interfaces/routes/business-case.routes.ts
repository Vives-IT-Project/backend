import { Router } from "express";
import BusinessCaseController from "../controllers/business-case.controller";
import BusinessCaseService from "../../application/service/business-case.service";

const router = Router();
const businessCaseController = new BusinessCaseController(
  new BusinessCaseService(),
);

router.get("/", businessCaseController.getAllBusinessCases);
router.get("/:id", businessCaseController.getBusinessCaseById);
router.post("/", businessCaseController.createBusinessCase);
router.put("/:id", businessCaseController.updateBusinessCase);
router.delete("/:id", businessCaseController.deleteBusinessCase);
router.get(
  "/organization/:idOrganization",
  businessCaseController.getBusinessCasesByOrganizationId,
);

export default router;
