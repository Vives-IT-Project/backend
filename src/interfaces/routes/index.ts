import { Router } from "express";
import userRoutes from "./users.routes";
import organizationRoutes from "./organizations.routes";
import goalRoutes from "./goals.routes";

const router = Router();

router.get("/health", (req, res) => {
  res.send("Server is running");
});

router.use("/users", userRoutes);
router.use("/organization", organizationRoutes);
router.use("/goals", goalRoutes);

export default router;
