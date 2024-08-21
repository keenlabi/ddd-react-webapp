import { User } from "../../domain/user/User";

export class UserView {  
    constructor(
        private readonly id:number,
        private readonly firstName:string,
        private readonly lastName:string,
        private readonly email:string,
        private readonly phoneNumber:string,
        private readonly role:string,
        private readonly hasAccess:boolean,
        private readonly createdAt:string,
        private readonly updatedAt:string
    ) {}
    
    static fromDomain(user:User) {
        const userProperties = user.properties

        return new UserView(
            userProperties.id,
            userProperties.email,
            userProperties.firstName,
            userProperties.lastName,
            userProperties.phoneNumber,
            userProperties.role,
            userProperties.hasAccess,
            userProperties.createdAt.toLocaleDateString(),
            userProperties.updatedAt.toLocaleDateString()
        )
    }

    get fullName() {
        return `${this.firstName}, ${this.lastName}`;
    }
}