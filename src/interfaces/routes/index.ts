import { Router } from "express";
import userRoutes from "./users.routes";
import organizationRoutes from "./organizations.routes";
import goalRoutes from "./goals.routes";
import domainRoutes from "./domain.routes";
import evaluationTopicRoutes from "./eval-topics.routes";

const router = Router();

router.get("/health", (req, res) => {
  res.send("Server is running");
});

router.use("/users", userRoutes);
router.use("/organization", organizationRoutes);
router.use("/goals", goalRoutes);
router.use("/domain", domainRoutes);
router.use("/evaluation-topics", evaluationTopicRoutes);

export default router;
