import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./crud/NavbarComponant";
import Crud2 from "./crud2";

function App () 
{
  return (
    <div className="App">
      <Router>
        <div>
          <NavbarComponent />
          <Routes>
            <Route path="/books" element={<Crud />} />
            <Route path="/Peminjams" element= {<Crud2/>} />
          </Routes>
        </div>
      </Router>
{/* 
      <Crud />
      <Crud2 /> */}
    </div>  
  );
}

export default App;