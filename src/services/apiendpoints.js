const BASE_URL = import.meta.env.VITE_BASE_URL;

// TECHNOLOGIES ENDPOINTS
export const technologiesEndpoints = {
  TECHNOLOGIES_GET: BASE_URL + "/api/v1/technologies/technologiesGET",
  TECHONOLOGIES_ADD: BASE_URL + "/api/v1/technologies/technologiesADD",
  TECHNOLOGIES_UPDATE: BASE_URL + "/api/v1/technologies/technologiesUPDATE",
  TECHNOLOGIES_DELETE: BASE_URL + "/api/v1/technologies/technologiesDELETE",
};

// PROJECTS ENDPOINTS
export const projectsEndpoints = {
  PROJECTS_GET: BASE_URL + "/api/v1/project/projectsGET",
  PROJECTS_ADD: BASE_URL + "/api/v1/project/projectADD",
  PROJECTS_UPDATE: BASE_URL + "/api/v1/project/projectUPDATE",
  PROJECTS_DELETE: BASE_URL + "/api/v1/project/projectDELETE",
};

// EDUCATION ENDPOINTS
export const educationEndpoints = {
  EDUCATION_GET: BASE_URL + "/api/v1/education/educationsGET",
  EDUCATION_ADD: BASE_URL + "/api/v1/education/educationADD",
  EDUCATION_UPDATE: BASE_URL + "/api/v1/education/educationUPDATE",
  EDUCATION_DELETE: BASE_URL + "/api/v1/education/educationDELETE",
};

// EXPERIENCE ENDPOINTS
export const experienceEndpoints = {
  EXPERIENCE_GET: BASE_URL + "/api/v1/experience/experiencesGET",
  EXPERIENCE_ADD: BASE_URL + "/api/v1/experience/experienceADD",
  EXPERIENCE_UPDATE: BASE_URL + "/api/v1/experience/experienceUPDATE",
  EXPERIENCE_DELETE: BASE_URL + "/api/v1/experience/experienceDELETE",
};
