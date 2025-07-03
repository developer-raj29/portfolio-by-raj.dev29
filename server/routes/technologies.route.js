const express = require("express");

const route = express.Router();

const {
  technologiesGET,
  technologiesADD,
  technologiesUPDATE,
  technologiesDELETE,
} = require("../controllers/technologies.controller");

route.get("/technologiesGET", technologiesGET);
route.post("/technologiesADD", technologiesADD);
route.put("/technologiesUPDATE", technologiesUPDATE);
route.delete("/technologiesDELETE", technologiesDELETE);

module.exports = route;
