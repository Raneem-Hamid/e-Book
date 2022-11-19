import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Singlebook from "./pages/Singlebook";
import { Routes,Route } from "react-router";
// import React, { useContext } from "react";
import BooksProvider from "./Context";
import Fav from "./pages/Fav";

function App() {
  return (
    <div >
      
      <BooksProvider>
          <Routes>
      <Route path="/reg" element={<Register/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/singleb/:id" element={<Singlebook/>}/>
      <Route path="/log" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cont" element={<Contact/>}/>
      <Route path="/fav" element={<Fav/>}/>
      </Routes>
       </BooksProvider>
    </div>
  );
}

export default App;
