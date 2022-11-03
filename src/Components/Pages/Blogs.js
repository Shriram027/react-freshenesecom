import React from "react";
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';

const Blogs = () => {


    const myStyle = {
        height: "50px",
        width: "50px",
        borderRadius: "50%"
    }

    return (<>
        <div className="flex col-12 mt-8">
            <div className="md:col-6 justify-content-start">
                <h5>Read our blog posts</h5>
            </div>
            <div className="flex md:col-6 justify-content-end">
                <Button label="Go to blog" className="p-button-text text-dark" icon="pi pi-angle-right" iconPos="right" />
            </div>
        </div>

        <div className='grid col-12 mt-4'>
            <div className='grid md:col-4 justify-content-center'>
                <div className="card w-10">
                    <div className="card-body">
                        <Image src="https://cdn.pixabay.com/photo/2017/07/31/04/11/tomato-2556426_960_720.jpg" alt="Image" width="350" />
                        <div className='container-fluid mt-4' style={{background: `linear-gradient(#D3D3D3, #000000)`}}>

                            <h6 className='card-subtitle text-900'>Our chef tips for a great and tasty dinner ready IN 20 minutes</h6>
                            
                                <div className="flex align-items-left justify-content-start">
                                    <img src="https://media.istockphoto.com/photos/conceptual-background-on-history-education-literature-topics-picture-id1022236966?k=20&m=1022236966&s=612x612&w=0&h=e-HzMiErRUSyyS7RPuFcXbOmHFQkC8i0cYjPHTPRGKI=" className="img-thumbnail" alt="images" style={myStyle}/>

                                    <span className="flex align-items-center justify-content-center ml-4">
                                        <h6 className="text-100">Author    17.01.2022</h6>
                                    </span>
                                </div>
                            

                        </div>
                    </div>
                </div>
            </div>

            <div className='grid md:col-2 mt-8 justify-content-end'>
                <h4 className="text-green-400">Vegetables</h4>
                <h6 className="text-dark mb-8">Which vegetable your family<br/>will love and wants eat<br/>each day.</h6>
            </div>
            <div className='grid md:col-5 justify-content-center'>
                <ul>
                    <li >Salat is kind good start to<br /> your morning routine
                        <br /><h6 className="mt-2">Author    15.01.2020</h6></li>
                    <li className="mt-4">Our chef tips for a great and<br />healthy breakfast
                        <br /><h6 className="mt-2">Author    15.01.2020</h6></li>
                    <li className="mt-4">Prepare a simple and<br />delicious breads
                        <br /><h6 className="mt-2">Author    15.01.2020</h6></li>
                </ul>

            </div>
        </div>
    </>
    )

}
export default Blogs;