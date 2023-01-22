import Repository from "@/repositories/Repository";
import User from "@/models/User.model";
import Query from "@/databases/Query";
import Operator from "@/databases/Operator";

class UserRepository extends Repository<User> {
  async getUserById(id: string) {
    return await this.database.get(new Query<User>("_id", Operator.EQUALS, id))
  }

  async getUserByEmail(email: string) {
    return await this.database.get(new Query<User>("email", Operator.EQUALS, email))
  }

  async addUser(user: User) {
    return await this.database.add(user);
  }

}

export default UserRepository;