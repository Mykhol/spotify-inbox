import Database from "@/databases/Database";

abstract class Repository<T> {

  constructor(
    private database: Database<T>
  ) {
  }

  add(item: T) {
    this.database.add(item)
  }
}

export default Repository;