const express = require("express");

const route = express.Router();

const {
  ExperienceGET,
  ExperienceADD,
  ExperienceUPDATE,
  ExperienceDELETE,
} = require("../controllers/experience.controller");

route.get("/experiencesGET", ExperienceGET);
route.post("/experienceADD", ExperienceADD);
route.put("/experienceUPDATE", ExperienceUPDATE);
route.delete("/experienceDELETE", ExperienceDELETE);

module.exports = route;
