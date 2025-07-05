import React, { Fragment } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import Navbar from "./components/common/navbar";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Fragment>
  );
};

export default App;
