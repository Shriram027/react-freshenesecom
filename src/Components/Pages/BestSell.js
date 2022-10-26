import React from 'react';
import "../Stylesheets/style.css";
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';



const BestSell = () => {
    return (
    <div className='flex mt-6'>
        <div className='flex  md:col-12'>
            <div className='md:col-3'>
                <h4>Best selling products</h4>
                <div className="flex">
                    <ul>
                        <li className='mt-2'><a  className='text-green-400'>Bakery</a></li>
                        <li className='mt-2'><a  className='text-green-400'>Fruits and vegetables</a></li>
                        <li className='mt-2'><a  className='text-green-400'>Meet and fish</a></li>
                        <li className='mt-2'><a  className='text-green-400'>Drinks</a></li>
                        <li className='mt-2'><a  className='text-green-400'>Kitchen</a></li>
                        <li className='mt-4 dropdown'>
                            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                                More products
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item text-green-400">Special nutritions</a></li>
                                <li><a className="dropdown-item text-green-400">Baby</a></li>
                                <li><a className="dropdown-item text-green-400">Pharmacy</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='md:col-1'></div>
            <div className='md:col-2'>
                <div className="card">
                    <div className="card-body">
                        <Image src="https://media.istockphoto.com/photos/five-best-vitamins-for-beautiful-skin-products-with-vitamins-a-b-c-e-picture-id950368148?k=20&m=950368148&s=612x612&w=0&h=8TzmH4-d3feCska_FrEJ7uECVrtYCpBiYidwZYQt5B0=" alt="Image" width="195" />
                        <div className='mt-2'>
                            <h5 className='card-title'>Salad</h5>
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
                        <Image src="https://media.istockphoto.com/photos/five-best-vitamins-for-beautiful-skin-products-with-vitamins-a-b-c-e-picture-id950368148?k=20&m=950368148&s=612x612&w=0&h=8TzmH4-d3feCska_FrEJ7uECVrtYCpBiYidwZYQt5B0=" alt="Image" width="195" />
                        <div className='mt-2'>
                            <h5 className='card-title'>Salad</h5>
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
                        <Image src="https://media.istockphoto.com/photos/five-best-vitamins-for-beautiful-skin-products-with-vitamins-a-b-c-e-picture-id950368148?k=20&m=950368148&s=612x612&w=0&h=8TzmH4-d3feCska_FrEJ7uECVrtYCpBiYidwZYQt5B0=" alt="Image" width="195" />
                        <div className='mt-2'>
                            <h5 className='card-title'>Salad</h5>
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

export default BestSell;