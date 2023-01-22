import {OptionalUnlessRequiredId} from "mongodb";

class DatabaseObject {

  constructor(public _id?: string) {

  }

}

export default DatabaseObject;