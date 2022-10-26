import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
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
        productService.getProductsSmall().then(data => setProducts(data.slice(0, 9)));
    }, []);

    console.log(products);



    const productTemplate = (product) => {
        return (
            
            <div className="product-item">
                <div className="product-item-content">
                    <div className="mb-3">
                        <img src={`images/product/${product.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image" />
                    </div>
                    <div>
                        <h4 className="mb-1">{product.name}</h4>
                        <h6 className="mt-0 mb-3">${product.price}</h6>
                        <span className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>{product.inventoryStatus}</span>
                        <div className="car-buttons mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded mr-2" />
                            <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded mr-2" />
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
           
        );
    }

    return (
        <div className="mt-8">
        <div className="carousel-demo">
            <div className="card">
                <Carousel value = {products} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={productTemplate} />
            </div>
        </div>
        </div>
    );
}



export default Reviews;