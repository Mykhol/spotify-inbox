import Query from "@/databases/Query";

abstract class Database<T> {

  abstract get(query: Query<T>): Promise<T | null>
  abstract add(item: T): Promise<T>
  abstract remove(query: Query<T>): Promise<T | void>

}

export default Database;