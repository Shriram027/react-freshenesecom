import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Slider } from 'primereact/slider';
import BrandSelection from './BrandSelection';
import Ratings from './Ratings';
import axios from 'axios';
import ReactStars from "react-rating-stars-component";




const Categories = () => {

    const sliderStyle = {
        width: "150px"
    }

    const sty = {
        textDecoration: "none"
    }

    const firstExample = {
        size: 20,
        edit: false,
    };




    const [value5, setValue5] = useState([20, 80]);
    const [products, setProducts] = useState([]);


    const fetchProducts = async () => {
        const { data } = await axios.get('https://freshness12.herokuapp.com/product-category/fruit');
        const apidata = data;
        setProducts(apidata);
    };

    useEffect(() => {

        fetchProducts()

    }, []);



    // function getStars(rating) {
    //     rating = Math.round(rating * 2) / 2;
    //     let output = [];
    //     for (var i = rating; i >= 1; i--)
    //       output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
    //     if (i === .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
    //     for (let i = (5 - rating); i >= 1; i--)
    //       output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

    //     return output.join('');

    //   }


    return (<>
        <div className='grid col-12 mt-6'>
            <div className='md:col-3 ml-2'>
                <h4>Categories</h4>
                <ul className='mt-4'>
                    <li>Apples <span className='ml-8 text-green-400 '>332</span></li>
                    <li className='mt-2'>Mango <span className='ml-8 mt-8 text-green-400 '>112</span></li>
                    <li className='mt-2'>Papaya <span className='ml-8 mt-8 text-green-400 '> 32</span></li>
                    <li className='mt-2'>Grapes <span className='ml-8 mt-8 text-green-400 '> 48</span></li>
                </ul>

                <BrandSelection />
                <Ratings />

                <h4 className='mt-6'>Price</h4>
                <Slider className='mt-4' value={value5} style={sliderStyle} onChange={(e) => setValue5(e.value)} range />
                <div>
                    <span>
                        <h5>min</h5>
                        <input type="text" style={{ width: "50px" }} placeholder="000"></input>
                    </span>
                    <span>
                        <h5>max</h5>
                        <input type="text" style={{ width: "50px" }} placeholder="000"></input>
                    </span>
                </div>

                <Button className='mt-2' label="Apply" />
            </div>

            <div className='md:col-8' >
                {products.map((product) => (
                    <div className='card mt-4' style={{ height: "270px" }}>
                        <div className='grid col-12'>
                            <div className='md:col-4'>
                                <div className='card w-10'>
                                    <img src={product.image} alt="fruit" height="250px" width='233px' />
                                </div>

                            </div>
                            <div className='md:col-4'>
                                <h4>{product.title}</h4>
                                <h6 className='text-gray-500' style={{
                                    padding: "8px",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    overflowWrap: "break-word",
                                    textOverflow: "ellipsis"
                                }}>{product.discription}</h6>

                                <ReactStars {...firstExample} value={product.rating} />
                                <h6 className='mt-4'>Freshness <span className='ml-5'>{product.freshness}</span></h6>
                                <h6 className='mt-2'>Farm<span className='ml-7'>{product.farm}</span></h6>
                                <h6 className='mt-2'>Delivery<span className='ml-6'>{product.delivery}</span></h6>
                                <h6 className='mt-2'>Stock<span className='ml-7'>{product.stock} pcs</span></h6>
                            </div>

                            <div className='md:col-3 ml-6' style={sty}>
                                <h3><ins>{product.price} USD</ins> <br /> <small className='text-gray-500'><del>46.08</del></small></h3>
                                <h5 className='text-gray'>Free shipping</h5>
                                <small>Delivery in 1 day</small><br />
                                <Button className='mt-2' label="Product detail" icon="pi pi-angle-right" iconPos="right" />
                                <Button label="Add to wishlist" className="mt-2 p-button-text text-dark" icon="pi pi-heart" iconPos="left" />
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>


        </div>


    </>
    )
}

export default Categories;