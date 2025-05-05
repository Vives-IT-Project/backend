import { Router } from "express";
import userRoutes from "./users";
import organizationRoutes from "./organizations.routes";

const router = Router();

router.get("/health", (req, res) => {
  res.send("Server is running");
});

router.use("/users", userRoutes);
router.use("/organization", organizationRoutes);

export default router;
