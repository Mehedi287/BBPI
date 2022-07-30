import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";

import ClassRoutines from "./components/ClassRoutines/ClassRoutines";
import Stepper from "./components/Steper/Stepper";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="home" element={<Home />}></Route>

        <Route path="classRoutines" element={<ClassRoutines />}></Route>

        <Route path="stepper" element={<Stepper />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
