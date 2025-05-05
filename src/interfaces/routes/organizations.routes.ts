import { Router } from "express";
import OrganizationController from "../controllers/organization.controller";
import OrganizationService from "../../application/service/organization.service";

const router = Router();
const organizationController = new OrganizationController(
  new OrganizationService(),
);

router.get("/", organizationController.getAllOrganizations);
router.get("/:id", organizationController.getOrganizationById);
router.post("/", organizationController.createOrganization);
router.put("/:id", organizationController.updateOrganization);
router.delete("/:id", organizationController.deleteOrganization);

export default router;
