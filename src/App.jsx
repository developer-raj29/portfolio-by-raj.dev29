import React, { useEffect } from "react";
import { educationGET } from "./services/operations/education";
import { projectGET } from "./services/operations/projects";
import { technologiesGET } from "./services/operations/technologies";
import { experienceGET } from "./services/operations/experience";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(educationGET());
    dispatch(projectGET());
    dispatch(technologiesGET());
    dispatch(experienceGET());
  }, [dispatch]);

  return (
    <div className="text-rose-700">
      App
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default App;
