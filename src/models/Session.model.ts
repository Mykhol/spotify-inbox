import DatabaseObject from "@/models/DatabaseObject.model";

class Session extends DatabaseObject {

  constructor(
    public sessionToken: string,
    public userId: string,
    public expires?: number,
  ) {
    super();
  }

}

export default Session;