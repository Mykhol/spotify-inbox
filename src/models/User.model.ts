import DatabaseObject from "@/models/DatabaseObject.model";

class User extends DatabaseObject {
  constructor(
    public name: string,
    public email: string,
    public emailVerified?: number,
    public image?: string,
  ) {
super();
  }
}

export default User;