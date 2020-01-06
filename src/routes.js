const express = require("express");

const ShedulerController = require("./app/controllers/ShedulerController");
const SerPredialfoneController = require("./app/controllers/SerPredialfoneController");
const DashboardController = require("./app/controllers/DashboardController");
const MailController = require("./app/controllers/MailController");

const paginateMiddleware = require('./app/middlewares/paginate')

const routes = express.Router();

routes.post("/portabilidade/back/sheduler", ShedulerController.store);

routes.post("/portabilidade/back/telefone", SerPredialfoneController.getInformation);

routes.get("/portabilidade/back/dashboard/find/:id", DashboardController.find);
routes.put("/portabilidade/back/dashboard/update", DashboardController.update);
routes.delete("/portabilidade/back/dashboard/delete/:id", DashboardController.delete);
routes.post("/portabilidade/back/dashboard/mail/:id", MailController.send);


routes.get("/portabilidade/back/sheduler/:page?*", ShedulerController.index);

module.exports = routes;
