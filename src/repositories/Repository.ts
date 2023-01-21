import Database from "@/databases/Database";

class Repository<T> {

  constructor(
    private database: Database<T>
  ) {
  }

  async addOne(item: T) {
    await this.database.addOne(item)
  }
}

export default Repository;