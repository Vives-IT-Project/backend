import { Router } from "express";
import DomainController from "../controllers/domain.controller";
import DomainService from "../../application/service/domains.service";

const router = Router();
const domainController = new DomainController(new DomainService());

router.get("/", domainController.getAllDomains);
router.get("/:id", domainController.getDomainById);
router.post("/", domainController.createDomain);
router.put("/:id", domainController.updateDomain);
router.delete("/:id", domainController.deleteDomain);
router.get(
  "/organization/:idOrganization",
  domainController.getDomainsByOrganizationId,
);

export default router;
