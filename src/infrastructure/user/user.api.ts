import { User } from "../../domain/user/User";

export class ApiUser {
    constructor(
      public readonly id: number,
      public readonly firstName: string,
      public readonly lastName: string,
      public readonly email: string,
      public readonly phoneNumber: string,
      public readonly role: string,
      public readonly hasAccess: boolean,
      public readonly createdAt: string,
      public readonly updatedAt: string
    ) {}
  
    toDomain(): User {
      return User.fromProperties({
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        role: this.role,
        hasAccess: this.hasAccess,
        createdAt: new Date(this.createdAt),
        updatedAt: new Date(this.updatedAt),
      });
    }
  }