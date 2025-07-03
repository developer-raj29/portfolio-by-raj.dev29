const express = require("express");

const route = express.Router();

const {
  EducationGET,
  EducationADD,
  EducationUPDATE,
  EducationDELETE,
} = require("../controllers/education.controller");

route.get("/educationsGET", EducationGET);
route.post("/educationADD", EducationADD);
route.put("/educationUPDATE", EducationUPDATE);
route.delete("/educationDELETE", EducationDELETE);

module.exports = route;
