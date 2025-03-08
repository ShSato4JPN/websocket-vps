import express, { type Request, type Response } from "express";

const app = express();

app.get("/", (_: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
