import { Request, Response } from "express";

export class FirstController{

  public home(req:Request, res:Response) {
    return res.json({
      response: 'Hello World'
    });
  }

}

export const firstController = new FirstController();
