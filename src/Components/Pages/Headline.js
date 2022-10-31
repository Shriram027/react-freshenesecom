import React from "react";
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';

const Headline = () => {
    return (<>
        <div className="flex mt-8">
            <div className="md:col-6 justify-content-start">
                <h5>Section headline</h5>
            </div>
            <span className="md:col-6 flex justify-content-end">
                <Button label="Read more" className="p-button-text text-dark" icon="pi pi-angle-right" iconPos="right" />
            </span>
        </div>

        <div className='flex  md:col-12 mt-4 justify-content-center'>
            <div className='flex md:col-2'>
                <div className="card">
                    <div className="card-body">
                        <Image src="https://cdn.pixabay.com/photo/2017/07/31/04/11/tomato-2556426_960_720.jpg" alt="Image" width="195" />
                        <div className='mt-2'>
                            <h5 className='card-title'>Fresh tomatoes</h5>
                            <h6 className='card-subtitle text-600'>Get nutrition from it.</h6>
                            <div className='mt-4'>
                                <h5>$50<Button className='ml-5' label="Buy now" /></h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='flex md:col-2'>
                <div className="card">
                    <div className="card-body">
                        <Image src="https://cdn.pixabay.com/photo/2017/07/31/04/11/tomato-2556426_960_720.jpg" alt="Image" width="195" />
                        <div className='mt-2'>
                            <h5 className='card-title'>Fresh tomatoes</h5>
                            <h6 className='card-subtitle text-600'>Get nutrition from it.</h6>
                            <div className='mt-4'>
                                <h5>$50<Button className='ml-5' label="Buy now" /></h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex md:col-2'>
                <div className="card">
                    <div className="card-body">
                        <Image src="https://cdn.pixabay.com/photo/2017/07/31/04/11/tomato-2556426_960_720.jpg" alt="Image" width="195" />
                        <div className='mt-2'>
                            <h5 className='card-title'>Fresh tomatoes</h5>
                            <h6 className='card-subtitle text-600'>Get nutrition from it.</h6>
                            <div className='mt-4'>
                                <h5>$50<Button className='ml-5' label="Buy now" /></h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            <div className='flex md:col-2'>
                <div className="card">
                    <div className="card-body">
                        <Image src="https://cdn.pixabay.com/photo/2017/07/31/04/11/tomato-2556426_960_720.jpg" alt="Image" width="195" />
                        <div className='mt-2'>
                            <h5 className='card-title'>Fresh tomatoes</h5>
                            <h6 className='card-subtitle text-600'>Get nutrition from it.</h6>
                            <div className='mt-4'>
                                <h5>$50<Button className='ml-5' label="Buy now" /></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )

}
export default Headline;