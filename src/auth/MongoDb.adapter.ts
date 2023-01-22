import {Adapter} from "next-auth/adapters";
import User from "@/models/User.model";
import UserRepository from "@/repositories/User.repository";
import Account from "@/models/Account.model";
import SessionModel from "@/models/Session.model";
import SessionRepository from "@/repositories/Session.repository";
import Session from "@/models/Session.model";
import AccountRepository from "@/repositories/Account.repository";

const MongoDbAdapter: Adapter = (userRepository: UserRepository, sessionRepository: SessionRepository, accountRepository: AccountRepository) => {

  return {
    async createUser(user: User) {
      return await userRepository.addUser(user);
    },
    async getUser(id: string) {
      return await userRepository.getUserById(id);
    },
    async getUserByEmail(email: string) {
      return await userRepository.getUserByEmail(email);
    },
    async getUserByAccount({ providerAccountId, provider }: Pick<Account, "providerAccountId" | "provider">) {
      const account = await accountRepository.getAccount(providerAccountId);
      const user = account && await userRepository.getUserById(account.userId);
    },
    async updateUser(user: User) {
      return await userRepository.updateUser(user)
    },
    async deleteUser(userId: string) {
      return await userRepository.deleteUser(userId);
    },
    async linkAccount(account: Account) {
      return
    },
    async unlinkAccount({ providerAccountId, provider }: Pick<Account, "providerAccountId" | "provider">) {
      return
    },
    async createSession({ sessionToken, userId, expires }: Pick<SessionModel, "sessionToken" | "userId" | "expires">) {
      return await sessionRepository.createSession(new Session(sessionToken, userId, expires))
    },
    async getSessionAndUser(sessionToken: string) {
      const session = await sessionRepository.getSessionBySessionToken(sessionToken)
      const user = session && await userRepository.getUserById(session.userId)

      return {session, user}
    },
    async updateSession({ sessionToken }: Pick<SessionModel, "sessionToken">) {

    },
    async deleteSession(sessionToken: string) {
      return await sessionRepository.deleteSessionByToken(sessionToken)
    }
  }

}