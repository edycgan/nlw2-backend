import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";
import StatisticsController from "./controllers/StatisticsController";

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const statisticsController = new StatisticsController();

routes.get("/classes", classesController.index);
routes.post("/classes", classesController.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

routes.get("/statistics", statisticsController.index);

export default routes;
