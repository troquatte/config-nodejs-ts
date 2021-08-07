import { Router, Request, Response } from "express";

const routes: Router = Router()
 
//Routes
routes.get("/", (req:Request, res:Response) => {
  return res.json({
    response: 'Hello World'
  });
});


export { routes };