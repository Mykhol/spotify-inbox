import Database from "@/databases/Database";

class Dynamo<T> extends Database<T> {

  constructor(private table: string) {
    super();
  }

  add(item: T): T {
    return item;
  }

  remove(item: T): T {
    return item;
  }


}

export default Dynamo;