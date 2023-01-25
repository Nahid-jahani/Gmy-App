import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetals from "./pages/ExerciseDetals";
import Footbar from "./components/Footbar";

function App() {
  return (
    <Box width="400" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetals />} />
      </Routes>
      <Footbar />
    </Box>
  );
}

export default App;
