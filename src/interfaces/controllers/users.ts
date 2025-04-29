import { Request, Response } from "express";
import { UserService } from "../../application/service/users";

export class UserController {
  private userService: UserService;
  constructor(private service: UserService) {
    this.userService = service;
  }

  getAllUsers = async (_req: Request, res: Response) => {
    const users = await this.userService.getAllUsers();
    res.json(users);
  };

  getUserById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUserById(id);
      if (!user) {
        res.status(404).json({ message: "User not found" });
      } else {
        res.json(user);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  createUser = async (req: Request, res: Response) => {
    const newUser = await this.userService.createUser(req.body);
    res.status(201).json(newUser);
  };

  updateUser = async (req: Request, res: Response) => {
    const updatedUser = await this.userService.updateUser(
      req.params.id,
      req.body,
    );
    res.json(updatedUser);
  };

  deleteUser = async (req: Request, res: Response) => {
    await this.userService.deleteUser(req.params.id);
    res.status(204).send();
  };
}
