import { getAllBooks, postABook } from "./books.service.js";

export const CgetAllBooks = async (_, res) => {
  try {
    const books = await getAllBooks();
    return res.send({
      error: false,
      message: "Retrieved Books Successfully",
      statusCode: 200,
      data: books,
    });
  } catch (error) {
    console.log(error);
    return res.status(501).send({
      error: true,
      message: "Failed to retrieve Books",
    });
  }
};

export const CpostABook = async (req, res) => {
  try {
    const books = await postABook(req.body);
    return res.send({
      error: false,
      message: "Posted a Book Successfully",
      statusCode: 201,
      data: books,
    });
  } catch (error) {
    console.log(error);
    return res.status(501).send({
      error: true,
      message: "Failed to post a Book",
    });
  }
};
