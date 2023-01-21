import Database from "@/databases/Database";

class Repository<T> {

  constructor(
    private database: Database<T>
  ) {
  }

  async addOne(item: T) {
    await this.database.addOne(item)
  }

  async addMany(items: T[]) {
    await this.database.addMany(items);
  }

  async remove(item: T) {
    await this.database.removeOne(item)
  }

  async removeMany(items: T[]) {
    await this.database.removeMany(items)
  }

  async getAll() {
    await this.database.getAll();
  }

}

export default Repository;