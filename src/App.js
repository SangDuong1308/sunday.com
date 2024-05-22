import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Dashboard />}></Route>
          </Routes>
          <Routes>
            <Route path="/create" element={<Create />}></Route>
          </Routes>
          <Routes>
            <Route path="/projects/:id" element={<Project />}></Route>
          </Routes>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
