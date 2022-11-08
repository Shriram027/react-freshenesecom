import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import ProductService from '../../Services/ProductService';
import '../Stylesheets/CarouselDemo.css';



const Reviews = () => {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => {
            setProducts(data.slice(0, 9));

        });
    });


    const productTemplate = (product) => {
        const myStyle = {
            width: "70px",
            height: "70px",
            borderRadius: "50%"
        }

        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="mt-3">
                        <h5>{product.feedback}</h5>
                    </div>
                    <div>
                        <div className="mt-6">
                            <img style={myStyle} src={product.image} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt="images"  />
                            {product.name}</div>
                    </div>
                </div>
            </div>
        );
    }

    return (<>
        
        <div className="mt-8">
            <div className="carousel-demo">
                <div className="card">
                    <Carousel value={products} numVisible={3} numScroll={2} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                        autoplayInterval={3000} itemTemplate={productTemplate} />
                </div>
            </div>
        </div>
        </>
    );
}



export default Reviews;