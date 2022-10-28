import React from 'react';
import Category from '../Components/Pages/Category';
import BestSell from '../Components/Pages/BestSell';
import BestFarmer from '../Components/Pages/BestFarmer';
import Reviews from '../Components/Pages/Reviews';
import Headline from '../Components/Pages/Headline';
import Blogs from '../Components/Pages/Blogs';



const GridHome = () => {
    return(<>
    <Category />
    <BestSell />
    <BestFarmer />
    <Reviews />
    <Headline />
    <Blogs />
    </>)
}

export default GridHome;