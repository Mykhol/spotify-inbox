import Repository from "@/repositories/Repository";
import Session from "@/models/Session.model";
import Query from "@/databases/Query";
import Operator from "@/databases/Operator";
import User from "@/models/User.model";

class SessionRepository extends Repository<Session> {

  async createSession(session: Session) {
    return await this.database.add(session);
  }
  async getSessionBySessionToken(sessionToken: string) {
    return await this.database.get(new Query<Session>("sessionToken", Operator.EQUALS, sessionToken))
  }

  async updateSession(session: Session) {
    if (session._id) {
      const foundSession = await this.database.get(new Query<Session>("_id", Operator.EQUALS, session._id))
      if (foundSession) {
        const updatedSession = await this.database.update(session);
        if (updatedSession) {
          return updatedSession
        }
      }
    }

    return await this.database.add(session);
  }

  async deleteSessionByToken(sessionToken: string) {
    await this.database.remove(new Query<Session>("sessionToken", Operator.EQUALS, sessionToken));
  }

}

export default SessionRepository;