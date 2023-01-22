import DatabaseObject from "@/models/DatabaseObject.model";

class User implements DatabaseObject {
  constructor(public _id: string, public email: string) {

  }
}

export default User;