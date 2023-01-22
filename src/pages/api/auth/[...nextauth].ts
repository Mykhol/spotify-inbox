import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import GoogleProvider from "next-auth/providers/google";
import {MongoClient} from "mongodb";
import MongoDatabase from "@/databases/Mongo.database";

const client = new MongoClient(process.env.MONGODB_URI!)
const connect = client.connect()
export const authOptions = {
  adapter: MongoDBAdapter(connect, { databaseName: "data" }),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
}
export default NextAuth(authOptions)