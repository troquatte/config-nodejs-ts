import express from "express";
import { routes } from "./routes";

export class App{
  public server: express.Application;

  constructor(){
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware(){
    this.server.use(express.json());
  }

  public router(){
    this.server.use(routes);
  }
}

new App();