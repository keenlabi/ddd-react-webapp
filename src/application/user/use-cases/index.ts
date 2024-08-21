import { UserRepository } from "../../../domain/user/user.repository";
import { GetUserUseCase } from "./GetUserUseCase";

export class UserService {
    private getUserUseCase: GetUserUseCase;

    constructor(userRepository:UserRepository) {
        this.getUserUseCase = new GetUserUseCase(userRepository)
    }

    async getUser() {
        return await this.getUserUseCase.execute();
    }
}