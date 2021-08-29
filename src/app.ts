import express from "express";
import { router } from "./router";

export class App{
  public server: express.Application = express();

  constructor(){
    this.server;
    this.middleware();
    this.router();
  }

  private middleware(){
    this.server.use(express.json());
  }

  private router(){
    this.server.use(router);
  }
}