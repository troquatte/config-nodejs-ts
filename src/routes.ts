import { Router } from "express";
import { FirstController } from "./app/controller/FirstController";

const routes: Router = Router()

//Controllers
const firstController = new FirstController();


//Routes
routes.get("/", firstController.home);


export { routes };