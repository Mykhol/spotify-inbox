import Database from "@/databases/Database";
import {DynamoDBDocumentClient, PutCommand, PutCommandInput, ScanCommand} from "@aws-sdk/lib-dynamodb"
import {DynamoDBClient} from "@aws-sdk/client-dynamodb";

class Dynamo<T> implements Database<T> {

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
    const params = {
      TableName: this.tableName,
      Item: item,
    } as PutCommandInput;

    const data = await this.documentClient.send(new PutCommand(params));

    return item;
  }

  remove(item: T) {
  }

  addMany(items: T[]) {
  }

  async getAll() {
    const params = {
      TableName: this.tableName,
    };
    const data = await this.documentClient.send(new ScanCommand(params));
    if (data.$metadata.httpStatusCode === 200) {
      return data.Items as T[];
    }

    return data.Items as T[];
  }

  removeAll() {
  }

  removeMany(items: T[]) {
  }

  removeOne(item: T) {
  }

}

export default Dynamo;