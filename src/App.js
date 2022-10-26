import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MainFooter from "./Components/Layouts/MainFooter";
import Navbar from './Components/Layouts/Navbar';
import ProductFooter from "./Components/Layouts/ProductFooter";
import BestFarmer from "./Components/Pages/BestFarmer";
import BestSell from "./Components/Pages/BestSell";
import Blogs from "./Components/Pages/Blogs";
import Category from "./Components/Pages/Category";
import Headline from "./Components/Pages/Headline";
import Reviews from "./Components/Pages/Reviews";


function App() {
  return (<>

    <Navbar />
    <Category />
    <BestSell />
    <BestFarmer />
    <Reviews />
    <Headline />
    <Blogs />
    <MainFooter />
    <ProductFooter />
  </>


  );
}

export default App;
