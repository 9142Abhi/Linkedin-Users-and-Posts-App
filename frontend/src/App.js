import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Login from "./component/login";
import Signup from "./component/signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
