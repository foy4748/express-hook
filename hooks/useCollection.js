import dotenv from "dotenv";
import mongodb from "mongodb";

dotenv.config();
const { MongoClient, ServerApiVersion } = mongodb;
const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const useCollection = (collectionName) => {
  const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.qilkt.mongodb.net/${DB_NAME}?appName=cluster0`;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(DB_NAME).collection(collectionName);
};

export default useCollection;
