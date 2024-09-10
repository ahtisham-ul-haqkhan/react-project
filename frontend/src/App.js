import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // Fixed typo
import { useState } from "react";
import RefreshHandler from "./RefreshHandler";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  // PrivateRouter for protecting routes
  const PrivateRouter = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <RefreshHandler setAuthenticated={setAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<PrivateRouter element={<Home />} />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </div>
  );
}

export default App;
