import { Router } from "express";
import { UserController } from "../controllers/users.controller";
import { UserService } from "../../application/service/users.service";

const router = Router();
const userController = new UserController(new UserService());

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

router.post("/login", userController.loginUser);

export default router;
