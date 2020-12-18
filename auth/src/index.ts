import express, { Request, Response } from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.get("/", (req: Request, res: Response) => {
  res.send("hello auth");
});

app.listen(3000, () => {
  console.log("auth service running");
});
