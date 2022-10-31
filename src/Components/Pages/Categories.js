import React from 'react';
import { Button } from 'primereact/button';
 


const Categories = () => {

    const sty = {
        textDecoration: "none"
    }

    return (<>
        <div className='grid col-12 mt-6'>
            <div className='md:col-3 ml-2'>
                <h4>Categories</h4>
                <ul className='mt-4'>
                    <li>Category name <span className='ml-8 text-green-400 '>332</span></li>
                    <li>Category name <span className='ml-8 mt-8 text-green-400 '>112</span></li>
                    <li>Category name <span className='ml-8 mt-8 text-green-400 '> 32</span></li>
                    <li>Category name <span className='ml-8 mt-8 text-green-400 '> 48</span></li>
                </ul>
            </div>

            <div className='md:col-8'>
                <div className='card'>
                    <div className='grid col-12'>
                        <div className='md:col-4'>
                            <div className='card w-10'>
                                <img src="https://m.media-amazon.com/images/I/31lES8WxX4L.jpg" alt="fruit" height="240px" width='237px' />
                            </div>

                        </div>
                        <div className='md:col-4'>
                            <h4>Alphonso fresh</h4>
                            <h6 className='text-gray-500'>Ever fresh delicious mango.</h6>
                            <small><i className='pi pi-star-fill'></i> <i className='pi pi-star-fill'></i> <i className='pi pi-star-fill'></i> <i className='pi pi-star-fill'></i></small>
                            <h6 className='mt-4'>Freshness <span className='ml-5'>New (Extra fresh)</span></h6>
                            <h6 className='mt-2'>Farm<span className='ml-7'>Grocery term fields</span></h6>
                            <h6 className='mt-2'>Delivery<span className='ml-6'>Europe</span></h6>
                            <h6 className='mt-2'>Stock<span className='ml-7'>320 pcs</span></h6>
                        </div>

                        <div className='md:col-3 ml-6' style={sty}>
                        <h3><ins>30.06</ins> <br /> <small className='text-gray-500'><del>46.08</del></small></h3>
                        <h5 className='text-gray'>Free shipping</h5>
                        <small>Delivery in 1 day</small>
                        <Button></Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    </>
    )
}

export default Categories;