import React from 'react';
import "../Stylesheets/style.css";
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';



const BestFarmer = () => {
    return (
    <div className='flex mt-6'>
        <div className='flex  md:col-12 mr-4'>
            <div className='md:col-3'>
                <h4>Best from farmers</h4>
                <div className="flex">
                    <ul>
                        <li className='mt-2'><a href='#' className='text-green-400'>Carrot</a></li>
                        <li className='mt-2'><a href='#' className='text-green-400'>Tomatoes</a></li>
                        <li className='mt-2'><a href='#' className='text-green-400'>Potatoes</a></li>
                        <li className='mt-2'><a href='#' className='text-green-400'>Chicken</a></li>
                        <li className='mt-2'><a href='#' className='text-green-400'>Pork</a></li>
                        <li className='mt-4 dropdown'>
                            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                                More products
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item text-green-400" href="#">Cotton</a></li>
                                <li><a className="dropdown-item text-green-400" href="#">Flowers</a></li>
                                <li><a className="dropdown-item text-green-400" href="#">Woods</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='md:col-1'></div>
            <div className='md:col-2'>
                <div className="card">
                    <div className="card-body">
                        <Image src="https://cdn.pixabay.com/photo/2017/07/31/04/11/tomato-2556426_960_720.jpg" alt="Image" width="195" />
                        <div className='mt-2'>
                            <h5 className='card-title'>Fresh tomatoes</h5>
                            <h6 className='card-subtitle text-600'>Get nutrition from it.</h6>
                            <div className='mt-4'>
                            <h5>$50<Button className='ml-5' label="Buy now"/></h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:col-2'>
                <div className="card">
                    <div className="card-body">
                        <Image src="https://cdn.pixabay.com/photo/2018/06/15/23/27/cherries-3477927_960_720.jpg" alt="Image" width="195" />
                        <div className='mt-2'>
                            <h5 className='card-title'>Tomatoes</h5>
                            <h6 className='card-subtitle text-600'>Get nutrition from it.</h6>
                            <div className='mt-4'>
                            <h5>$50<Button className='ml-5' label="Buy now"/></h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:col-2'>
                <div className="card">
                    <div className="card-body">
                        <Image src="https://cdn.pixabay.com/photo/2015/03/07/13/55/tomato-663097_960_720.jpg" alt="Image" width="195" />
                        <div className='mt-2'>
                            <h5 className='card-title'>Tomatoes</h5>
                            <h6 className='card-subtitle text-600'>Get nutrition from it.</h6>
                            <div className='mt-4'>
                            <h5>$50<Button className='ml-5' label="Buy now"/></h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default BestFarmer;