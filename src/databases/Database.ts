import Query from "@/databases/Query";

abstract class Database<T> {

  abstract get(query: Query<T>): Promise<T | null>
  abstract add(item: T): Promise<T>
  abstract remove(query: Query<T>): Promise<void>
  abstract update(item: T): Promise<T | null>

}

export default Database;