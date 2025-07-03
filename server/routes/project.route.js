const express = require("express");

const route = express.Router();

const {
  ProjectsGET,
  ProjectADD,
  ProjectUPDATE,
  ProjectDELETE,
} = require("../controllers/projects.controller");

route.get("/projectsGET", ProjectsGET);
route.post("/projectADD", ProjectADD);
route.put("/projectUPDATE", ProjectUPDATE);
route.delete("/projectDELETE", ProjectDELETE);

module.exports = route;
