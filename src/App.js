import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";
import Course from "./screens/Course";
import Gallery from "./screens/Gallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
