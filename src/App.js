import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from './Components/Layouts/Navbar';
import BestFarmer from "./Components/Pages/BestFarmer";
import BestSell from "./Components/Pages/BestSell";
import Category from "./Components/Pages/Category";
import Reviews from "./Components/Pages/Reviews";


function App() {
  return (<>
  
    <Navbar />
    <Category />
    <BestSell />
    <BestFarmer />
    <Reviews />
    </>

   
  );
}

export default App;
