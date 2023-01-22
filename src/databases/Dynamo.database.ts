import Database from "@/databases/Database";
import {DynamoDBDocumentClient, GetCommand, PutCommand} from "@aws-sdk/lib-dynamodb"
import {DeleteItemCommand, DynamoDBClient, GetItemCommand} from "@aws-sdk/client-dynamodb";
import DatabaseObject from "@/models/DatabaseObject.model";
import Query from "@/databases/Query";

class Dynamo<T extends DatabaseObject> implements Database<T> {

  protected dynamoClient: DynamoDBClient;
  protected documentClient: DynamoDBDocumentClient;
  protected readonly tableName: string;

  constructor(
    region: string,
    accessKeyId: string,
    secretAccessKey: string,
    tableName: string
  ) {
    this.tableName = tableName;
    this.dynamoClient = new DynamoDBClient({
      region: region,
      credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
      },
    });

    this.documentClient = DynamoDBDocumentClient.from(this.dynamoClient);
  }

  async add(item: T): Promise<T> {
      await this.documentClient.send(new PutCommand({
        TableName: this.tableName,
        Item: item,
      }));

      return item;
  }

  async get(query: Query<T>): Promise<T | null> {

    let key = {};
    key = {...key, [query.property.toString()]: query.value};

    console.log(key)

    const value = await this.documentClient.send(new GetCommand({
      TableName: this.tableName,
      Key: key
    }))

    return value.Item as T || null;
  }

  async remove(query: Query<T>): Promise<void | T> {

    let key = {};
    key = {...key, [query.property.toString()]: {N: query.value}};

    await this.documentClient.send(new DeleteItemCommand({
      TableName: this.tableName,
      Key: key
    }))

    return
  }
}

export default Dynamo;