import express from "express";

// Importing routes
import booksRoutes from "./modules/books/books.route.js";

const router = express.Router();

const globalRouter = [
  {
    path: "/books",
    routeObj: booksRoutes,
  },
];

for (const singleRoute of globalRouter) {
  router.use(singleRoute.path, singleRoute.routeObj);
}

export default router;
