import React, { useState, useEffect } from "react";
import Fruit from "./Fruit";
import { Button } from 'primereact/button';
import { Slider } from 'primereact/slider';
import BrandSelection from "./BrandSelection";
import Ratings from "./Ratings";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const GridCategory = () => {
    const sliderStyle = {
        width: "150px"
    }

    const sty = {
        textDecoration: "none"
    }

    const [value5, setValue5] = useState([20, 80]);

    const [products, setProducts] = useState([]);
    const columnsPerRow = 3;

    const fetchProducts = async () => {
        const { data } = await axios.get('https://freshness12.herokuapp.com/product-category/fruit');
        const apidata = data;
        setProducts(apidata);
    };

    useEffect(() => {

        fetchProducts()

    }, []);

    const getColumnsForRow = () => {
        let items = products.map((product, index) => {
            return (
                <Col>
                    <Card key={product._id}>
                        <Card.Body>
                        <Card.Img variant="top" src={product.image} />
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{product.discription}</Card.Subtitle>
                            {/* <Card.Text>
                {parse(post.excerpt.rendered)}
              </Card.Text>
              <Card.Link href={post.link}>View post</Card.Link>                  */}
                        </Card.Body>
                    </Card>
                </Col>
            );

        });
        return items;
    };

    return (<>
        <Fruit />
        <div className='grid col-12 mt-6'>
            <div className='md:col-3 ml-2'>
                <h4>Categories</h4>
                <ul className='mt-4'>
                    <li>Category name <span className='ml-8 text-green-400 '>332</span></li>
                    <li className='mt-2'>Category name <span className='ml-8 mt-8 text-green-400 '>112</span></li>
                    <li className='mt-2'>Category name <span className='ml-8 mt-8 text-green-400 '> 32</span></li>
                    <li className='mt-2'>Category name <span className='ml-8 mt-8 text-green-400 '> 48</span></li>
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


            <div className='md:col-8'>
                {/* {products.map((product) => (

                    <div className='grid col-12'>
                        <div className='md:col-4'>
                            <div className='card mt-4'>
                                <div className='card'>
                                    <img src={product.image} alt="fruit" height="250px" width='284px' />
                                </div>

                                <h4 className="ml-4 mt-2">{product.title}</h4>
                                <h6 className='ml-4 text-gray-500 mt-1'>{product.discription}</h6>
                                <small className='ml-4 text-yellow-400 mt-1'>{product.rating}</small>
                                <div className="col-12">
                                <h5 className=" md:col-6 ml-4 mt-1"><ins>{product.price} USD</ins> <br /> <small className='text-gray-500'><del>46.08</del></small></h5>
                                <span>
                                <Button className='md:col-6 mt-2' label="Buy now" icon="pi pi-angle-right" iconPos="right" />
                                </span></div>
                            </div>
                        </div>
                    </div>
                ))
                } */}

                <Row xs={1} md={columnsPerRow}>
                    {getColumnsForRow()}
                </Row>
            </div>


        </div>
    </>)

}

export default GridCategory;