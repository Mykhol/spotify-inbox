import DatabaseObject from "@/models/DatabaseObject.model";

class Account extends DatabaseObject {

  constructor(
    public userId: string,
    public type: string,
    public provider: string,
    public providerAccountId: string,
    public refresh_token: string,
    public access_token: string,
    public expires_at: number,
    public token_type: string,
    public scope: string,
    public id_token: string,
    public session_state: string,
    public oauth_token_secret: string,
    public oauth_token: string,
  ) {
    super();
  }

}

export default Account;