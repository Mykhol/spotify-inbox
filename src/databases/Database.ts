
abstract class Database<T> {

  abstract add(item: T): T

  abstract remove(item: T): T

}

export default Database;