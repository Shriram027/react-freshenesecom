import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./Components/Layouts/Header";
import Home from "./Views/Home";
import Fruit from "./Components/Pages/Fruit";
import Footer from "./Components/Layouts/Footer";


function App() {
  return (<Router>
    <div className = "App-container" >
  <Header />
  
  <Routes>
    <Route  path="/" element= {<Home />} />
    <Route  path="/fruits" element={<Fruit />}/>
    </Routes>
    <Footer />
     </div>
     </Router>

  );
}

export default App;
