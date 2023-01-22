import Database from "@/databases/Database";

class Repository<T> {

  constructor(
    protected database: Database<T>
  ) {
  }

}

export default Repository;