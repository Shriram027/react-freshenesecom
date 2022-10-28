import React from 'react';
import "../Stylesheets/style.css";
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';



const Category = () => {
    return (<div className='flex mt-6'>
        <div className='flex flex-row justify-content-left md:col-12 mr-4'>
            <div className='md:col-4'>
                <h4>Category menu</h4>
                <div className="flex">
                    <ul>
                        <li className='mt-2 text-green-400'>Bakery</li>
                        <li className='mt-2 text-green-400'>Fruits and vegetables</li>
                        <li className='mt-2 text-green-400'>Meet and fish</li>
                        <li className='mt-2 text-green-400'>Drinks</li>
                        <li className='mt-2 text-green-400'>Kitchen</li>
                        <li className='mt-4 dropdown'>
                            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                                More categories
                            </button>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item text-green-400">Special nutritions</li>
                                <li className="dropdown-item text-green-400">Baby</li>
                                <li className="dropdown-item text-green-400">Pharmacy</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='md:col-3'>
                <div className="card">
                    <div className="card-body">
                        <Image src="https://st2.depositphotos.com/3241943/7537/i/950/depositphotos_75378939-stock-photo-medicine-from-natural-products.jpg" alt="Image" width="310" />
                        <Button label="Read more" className="p-button-outlined mt-4" icon="pi pi-angle-right" iconPos="right" />

                    </div>
                </div>
            </div>
            <div className='md:col-3'>
                <div className="card">
                    <div className="card-body">
                        <Image src="https://st2.depositphotos.com/3241943/7537/i/950/depositphotos_75378939-stock-photo-medicine-from-natural-products.jpg" alt="Image" width="310" />
                        <Button label="Read more" className="p-button-outlined mt-4" icon="pi pi-angle-right" iconPos="right" />

                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Category;