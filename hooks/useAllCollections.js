import dotenv from "dotenv";
import mongodb from "mongodb";
import collections from "../collections.js";

dotenv.config();
const { MongoClient, ServerApiVersion } = mongodb;
const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const useAllCollections = () => {
  const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.qilkt.mongodb.net/${DB_NAME}?appName=cluster0`;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  const collectionObj = {};
  for (const [_key, _value] of Object.entries(collections)) {
    collectionObj[_value] = client.db(DB_NAME).collection(_value);
  }
  return collectionObj;
};

export default useAllCollections;
