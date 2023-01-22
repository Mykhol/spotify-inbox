import Repository from "@/repositories/Repository";
import User from "@/models/User.model";
import Query from "@/databases/Query";
import Operator from "@/databases/Operator";
import {mockSession} from "next-auth/client/__tests__/helpers/mocks";
import user = mockSession.user;


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

  async updateUser(user: User) {
    if (user._id) {
      const foundUser = await this.database.get(new Query<User>("_id", Operator.EQUALS, user._id))
      if (foundUser) {
        const updatedUser = await this.database.update(user);
        if (updatedUser) {
          return updatedUser
        }
      }
    }

    return await this.database.add(user);
  }

  async deleteUser(userId: string) {
    await this.database.remove(new Query<User>("_id", Operator.EQUALS, userId));
  }

}

export default UserRepository;