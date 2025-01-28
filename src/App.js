import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about-us" element={<About />} /> */}
    </Routes>
  );
}

export default App;
