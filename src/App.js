import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Home from "./pages/Home/Home";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import About from "./pages/about/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
