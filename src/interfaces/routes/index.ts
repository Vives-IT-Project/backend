import { Router } from "express";
import userRoutes from "./users";
import complexityRoutes from "./complexities.routes";
import businessCaseComplexityRoutes from "./business-case-complexities.routes"

const router = Router();

router.get("/health", (req, res) => {
  res.send("Server is running");
});

router.use("/users", userRoutes);
router.use("/complexity", complexityRoutes);
router.use("/business-case-complexity", businessCaseComplexityRoutes);

export default router;
