import { UserRepository } from "../../infrastructure/repositories/users.repo";

export class UserService {
  private userRepository = new UserRepository();

  async getAllUsers() {
    return this.userRepository.findAll();
  }

  async getUserById(id: string) {
    return this.userRepository.findById(id);
  }

  async createUser(data: any) {
    if (await this.userRepository.findByEmail(data.email)) {
      throw new Error("User already exists");
    }
    return this.userRepository.create(data);
  }

  async updateUser(id: string, data: any) {
    return this.userRepository.update(id, data);
  }

  async deleteUser(id: string) {
    return this.userRepository.delete(id);
  }

  async loginUser(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user || user.password !== password) {
      throw new Error("Invalid credentials");
    }
    return user;
  }
}
