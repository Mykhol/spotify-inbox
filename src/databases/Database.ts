abstract class Database<T> {

  abstract getAll(): Promise<T[]> | void
  abstract removeAll(): Promise<T[]> | void
  abstract addOne(item: T): Promise<T> | void
  abstract removeOne(item: T): Promise<T> | void
  abstract addMany(items: T[]): Promise<T[]> | void
  abstract removeMany(items: T[]): Promise<T[]> | void

}

export default Database;