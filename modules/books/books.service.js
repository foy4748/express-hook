import collections from "../../collections.js";
import useAllCollections from "../../hooks/useAllCollections.js";
//import useCollection from "../../hooks/useCollection.js";
const allCollections = useAllCollections();

export const getAllBooks = async () => {
  //const bookCollection = useCollection(collections.BOOKS);
  const books = await allCollections[collections.BOOKS].find().toArray();
  return books;
};

export const postABook = async (payload) => {
  const response = await allCollections[collections.BOOKS].insertOne(payload);
  return response;
};
