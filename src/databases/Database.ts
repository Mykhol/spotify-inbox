abstract class Database<T> {

  abstract getAll(): void

  abstract removeAll(): void

  abstract addOne(item: T): void

  abstract addMany(items: T[]): void

  abstract removeOne(item: T): void

  abstract removeMany(items: T[]): void

}

export default Database;