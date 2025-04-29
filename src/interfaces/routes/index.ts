import { Router } from "express";
import userRoutes from "./users";

const router = Router();

router.get("/health", (req, res) => {
  res.send("Server is running");
});

router.use("/users", userRoutes);

export default router;
