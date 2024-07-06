import express from "express";
import cors from "cors";
import globalRouter from "./routes.js";

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// Feeding routes
app.use("/api", globalRouter);

app.get("/", (_, res) => {
  res.send({
    error: false,
    message: "Server is UP and RUNNING",
  });
});

app.listen(PORT, () =>
  console.log(`Server is UP and RUNNING at PORT : ${PORT}`)
);
