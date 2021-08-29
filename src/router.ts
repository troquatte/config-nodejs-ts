import { Router } from "express";
import { firstController } from "./app/controller/FirstController";

const router: Router = Router();

//Routes
router.get("/", firstController.home);

export { router };
