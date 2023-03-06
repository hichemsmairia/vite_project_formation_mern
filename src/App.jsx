import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
