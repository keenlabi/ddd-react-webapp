import { User } from "../../domain/user/User";
import { UserRepository } from "../../domain/user/user.repository";
import { RestClient } from "../RestClient";
import { ApiUser } from "./user.api";

export class UserResource implements UserRepository {
    constructor(
        private readonly restClient: RestClient,
        // private readonly store: RecipeStore
    ) {}
    
    async getCurrentUser(): Promise<User> {
        const apiUser = await this.restClient.get<ApiUser>('/user')
        .catch((error)=> { throw error });

        const user = apiUser.data.toDomain();
        return user
    }
}