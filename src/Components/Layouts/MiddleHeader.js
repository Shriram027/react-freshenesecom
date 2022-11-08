import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import 'primeicons/primeicons.css';
import axios from 'axios';



const MiddleHeader = () => {

    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);


    const handleSearch = (event) => {
        let value = event.target.value;
        let result = [];
        result = allData.filter((data) => {
            return data.title.search(value) !== -1;
        });
        setFilteredData(result);
    }


    const sty = {
        textDecoration: "none"
    }


    useEffect(() => {
        axios('https://freshness12.herokuapp.com/product-data')
            .then(response => {
                console.log(response.data)
                setAllData(response.data);
                setFilteredData(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    }, []);

    return (
        <div className='container-fluid'>
            <div className=' mt-4'>
                <div className="grid col-12 justify-content center">
                    <div className='grid md:col-3'>
                        <h3 className='mr-4'>Freshnesecom</h3>
                    </div>
                    <div className='grid md:col-6 p-inputgroup justify-content center'>
                        <InputText placeholder="Search products,categories..."  onChange={(event) => handleSearch(event)} />
                        <Button className="p-inputgroup-addon"><i className="pi pi-search"></i></Button>
                    </div>
                    <div className='grid md:col-3 justify-content-end'>
                        <span><i className="pi pi-shopping-bag ml-8 p-text-danger p-overlay-badge" style={{ fontSize: '18px' }}><Badge value="2" severity="danger"></Badge></i></span>
                        <span className='ml-4'><i className="pi pi-user"></i></span>
                    </div>
                </div>

                <div className='grid col-12'>
                    {filteredData.map((value,index)=> (
                        <div className='card mt-4' style={{ height: "270px" }}>
                            <div className='grid col-12'>
                                <div className='md:col-4'>
                                    <div className='card w-10'>
                                        <img src={value.image} alt="fruit" height="250px" width='233px' />
                                    </div>

                                </div>
                                <div className='md:col-4'>
                                    <h4>{value.title}</h4>
                                    <h6 className='text-gray-500' style={{
                                        padding: "8px",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        overflowWrap: "break-word",
                                        textOverflow: "ellipsis"
                                    }}>{value.discription}</h6>

                                    <small id="stars"></small>
                                    <h6 className='mt-4'>Freshness <span className='ml-5'>{value.freshness}</span></h6>
                                    <h6 className='mt-2'>Farm<span className='ml-7'>{value.farm}</span></h6>
                                    <h6 className='mt-2'>Delivery<span className='ml-6'>{value.delivery}</span></h6>
                                    <h6 className='mt-2'>Stock<span className='ml-7'>{value.stock} pcs</span></h6>
                                </div>

                                <div className='md:col-3 ml-6' style={sty}>
                                    <h3><ins>{value.price} USD</ins> <br /> <small className='text-gray-500'><del>46.08</del></small></h3>
                                    <h5 className='text-gray'>Free shipping</h5>
                                    <small>Delivery in 1 day</small><br />
                                    <Button className='mt-2' label="product detail" icon="pi pi-angle-right" iconPos="right" />
                                    <Button label="Add to wishlist" className="mt-2 p-button-text text-dark" icon="pi pi-heart" iconPos="left" />
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MiddleHeader;