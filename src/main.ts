import express, { Express, json, Request, Response } from "express";
import { indexRouter } from "./api/index.router";
import config from "config";

// create root Express instance
const app: Express = express();

// use json decoder for request body
// { strict: false } allows literals to be parsed instead of just objects
app.use(json({ strict: false }));

// include the index router
app.use("/api", indexRouter);

// root route serving as health check
app.get("/", (_: Request, res: Response) => {
  return res.status(200).send(`${config.get("meta.title")} is running...`);
});

const port = config.get("server.port");

// start server on { port }
app.listen(port, () =>
  console.log(`${config.get("meta.title")} is running on ${port}`)
);
