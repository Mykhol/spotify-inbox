import Database from "@/databases/Database";
import {Collection, MongoClient, Document, OptionalUnlessRequiredId, Db} from "mongodb";
import Query from "@/databases/Query";
import DatabaseObject from "@/models/DatabaseObject.model";
import database from "@/databases/Database";

class MongoDatabase<T extends DatabaseObject> implements Database<T> {
  private database: Db
  private collection: Collection

  constructor(private client: MongoClient, private databaseName: string, private collectionName: string) {
    client.connect()
    this.database = client.db(databaseName)
    this.collection = this.database.collection(collectionName)
  }

  async add(item: T): Promise<T> {
    await this.collection.insertOne(item as OptionalUnlessRequiredId<T>)
    return item
  }

  async get(query: Query<T>): Promise<T | null> {
    let filter = {};
    filter = {...filter, [query.property.toString()]: query.value};
    return await this.collection.findOne<T>(filter)
  }

  async remove(query: Query<T>): Promise<void> {
    let filter = {};
    filter = {...filter, [query.property.toString()]: query.value};
    await this.collection.deleteOne(filter)
    return
  }

  async update(item: T): Promise<T | null> {
    let filter = {};
    filter = {...filter, ["_id"]: item._id};
    const result = await this.collection.findOneAndUpdate(filter, item, {returnDocument: 'after'})
    return result.value ? result.value as unknown as T : null
  }

}

export default MongoDatabase;