import Database from "@/databases/Database";
import {DeleteCommand, DynamoDBDocumentClient, PutCommand, PutCommandInput, ScanCommand} from "@aws-sdk/lib-dynamodb"
import {DynamoDBClient} from "@aws-sdk/client-dynamodb";

class Dynamo<T extends Record<string, any>> implements Database<T> {

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

  async addOne(item: T) {
    await this.documentClient.send(new PutCommand({
      TableName: this.tableName,
      Item: item,
    }));
  }

  async addMany(items: T[]) {
    items.map(async (item) => {
      await this.documentClient.send(new PutCommand({
        TableName: this.tableName,
        Item: item,
      }));
    })
  }

  async getAll() {
    await this.documentClient.send(new ScanCommand({
      TableName: this.tableName,
    }));
  }

  async removeAll() {

  }

  async removeMany(items: T[]) {
  }

  async removeOne(item: T) {
    await this.documentClient.send(new DeleteCommand({
      TableName: this.tableName,
      Key: {
        id: item.id
      }
    }))
  }
}

export default Dynamo;