import type { UserProperties } from "./types";

export class User {
  
    constructor(
        private readonly id:number,
        private readonly firstName:string,
        private readonly lastName:string,
        private readonly email:string,
        private readonly phoneNumber:string,
        private readonly role:string,
        private readonly hasAccess:boolean,
        private readonly createdAt:Date,
        private readonly updatedAt:Date
    ) {}

    static fromProperties(properties: UserProperties): User {
        return new User(
            properties.id,
            properties.firstName,
            properties.lastName,
            properties.email,
            properties.phoneNumber,
            properties.role,
            properties.hasAccess,
            properties.createdAt,
            properties.updatedAt
        );
    }
    
    get properties(): UserProperties {
        return {
            id: this.id,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            phoneNumber: this.phoneNumber,
            role: this.role,
            hasAccess: this.hasAccess,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}