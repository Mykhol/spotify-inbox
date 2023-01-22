import Database from "@/databases/Database";
import {Collection, MongoClient, Document, OptionalUnlessRequiredId} from "mongodb";
import Query from "@/databases/Query";
import DatabaseObject from "@/models/DatabaseObject.model";

class MongoDatabase<T extends DatabaseObject> implements Database<T> {

  private client: MongoClient;
  private collection: Collection<T>

  constructor(private connectionUri: string, private databaseName: string, private collectionName: string) {
    this.client = new MongoClient(connectionUri);
    this.client.connect().then((r) => null)
    this.collection = this.client.db(databaseName).collection<T>(collectionName);
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

  remove(query: Query<T>): Promise<void | T> {
    return Promise.resolve(undefined);
  }

}

export default MongoDatabase;