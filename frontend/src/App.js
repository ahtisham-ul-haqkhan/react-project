import {Routes, Route} from "react-router-dom"; 
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Singup from "./pages/Signup";
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/singup" element={<Singup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;
