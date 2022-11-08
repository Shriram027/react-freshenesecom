import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { Slider } from 'primereact/slider';
import BrandSelection from "./BrandSelection";
import Ratings from "./Ratings";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FruitView from "../../Views/FruitView";
import ReactStars from "react-rating-stars-component";

const GridCategory = () => {
    const sliderStyle = {
        width: "150px"
    }

    const [value5, setValue5] = useState([20, 80]);

    const [products, setProducts] = useState([]);

    const columnsPerRow = 3;
    const fetchProducts = async () => {
        const { data } = await axios.get('https://freshness12.herokuapp.com/product-category/fruit');
        const apidata = data
        setProducts(apidata);
    };
    const firstExample = {
        size: 20,
        edit: false,
      };

      

    useEffect(() => {
        fetchProducts()
    }, []);

    const getColumnsForRow = () => {

        let countData = products.length;
        console.log(countData);
        
        <FruitView count={countData} />
        
        let items = products.map((product, index) => {

            return (
                <Col className="mt-4">
                    <Card key={product._id} style={{ width: '18rem', height: "450px" }}>
                        <Card.Body style={{ padding: '0' }}>
                            <Card.Img style={{ height: "220px" }} variant="top" src={product.image} />
                            <Card.Title style={{ padding: "8px" }}>{product.title}</Card.Title>
                            <Card.Subtitle style={{
                                padding: "8px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                overflowWrap: "break-word",
                                textOverflow: "ellipsis"
                            }} className="mb-2 text-muted">{product.discription}</Card.Subtitle>
                            <ReactStars {...firstExample} value = {product.rating}/>
                            <div className="col-12" style={{ display: "flex" }}>
                                <div className="col-6">
                                    <h3><ins>{product.price} USD</ins> <br /> <small className='text-gray-500'><del>00.00</del></small></h3></div>
                                <div className=" col-6">
                                    {/* <Button variant="primary">Buy now</Button> */}
                                    <Button label="Detail" icon="pi pi-angle-right" iconPos="right" />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            );

        });
        return items;
    };

    return (<>
        <div className='grid col-12 mt-6'>
            <div className='md:col-3 ml-2'>
                <h4>Categories</h4>
                <ul className='mt-4'>
                    <li>Apples <span className='ml-8 text-green-400 display-flex '>332</span></li>
                    <li className='mt-2'>Mango <span className='ml-8 mt-8 text-green-400 '>112</span></li>
                    <li className='mt-2'>Papaya <span className='ml-8 mt-8 text-green-400 '> 32</span></li>
                    <li className='mt-2'>Grapes <span className='ml-8 mt-8 text-green-400 '> 48</span></li>
                </ul>

                <BrandSelection />
                <Ratings />

                <h4 className='mt-6'>Price</h4>
                <Slider className='mt-4' value={value5} style={sliderStyle} onChange={(e) => setValue5(e.value)} range />
                <div className="col-12">
                    <div className="col-6">
                        <h5>min</h5>
                        <input type="text" style={{ width: "50px" }} placeholder="000"></input>
                    </div>
                    <div>
                        <h5>max</h5>
                        <input type="text" style={{ width: "50px" }} placeholder="000"></input>
                    </div>
                </div>
                <Button className='mt-2' label="Apply" />
            </div>


            <div className='md:col-8'>
                <Row xs={1} md={columnsPerRow}>
                    {getColumnsForRow()}
                </Row>
            </div>


        </div>
    </>)

}

export default GridCategory;