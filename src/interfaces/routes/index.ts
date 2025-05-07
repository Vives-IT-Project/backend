import { Router } from "express";
import userRoutes from "./users.routes";
import organizationRoutes from "./organizations.routes";
import goalRoutes from "./goals.routes";
import domainRoutes from "./domain.routes";
import evaluationTopicRoutes from "./eval-topics.routes";
import costCenterRoutes from "./cost-center.routes";
import businessCaseRoutes from "./business-case.routes";

const router = Router();

router.get("/health", (req, res) => {
  res.send("Server is running");
});

router.use("/users", userRoutes);
router.use("/organization", organizationRoutes);
router.use("/goals", goalRoutes);
router.use("/domain", domainRoutes);
router.use("/evaluation-topics", evaluationTopicRoutes);
router.use("/cost-center", costCenterRoutes);
router.use("/business-case", businessCaseRoutes);

export default router;
