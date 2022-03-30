import React from "react";
// REACT ROUTER DOM
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
// import from components 
import Navbar from "./components/Navbar";
// import from pages
import Albums from "./pages/Albums";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";

const App: React.FC = () => {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route index element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
