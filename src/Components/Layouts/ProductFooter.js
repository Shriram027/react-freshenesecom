import React from 'react';
import { Button } from 'primereact/button';


const ProductFooter = ()=>{
    return (<div className="mt-4">
        <h4 className='justify-content-start'>Product tags</h4>
        <div className='grid col-12'>
        <div className='md:col-1'><Button label="Beans" className="p-button-text text-dark" /></div>
        <div className='md:col-1'><Button label="Carrots" className="p-button-text text-dark" /></div>
        <div className='md:col-1'><Button label="Apples" className="p-button-text text-dark" /></div>
        <div className='md:col-1'><Button label="Garlic" className="p-button-text text-dark" /></div>
        <div className='md:col-1'><Button label="Cherries" className="p-button-text text-dark" /></div>
        <div className='md:col-1'><Button label="Tomatoes" className="p-button-text text-dark" /></div>
        <div className='md:col-1'><Button label="Meat" className="p-button-text text-dark" /></div>
        <div className='md:col-1'><Button label="Brocolli" className="p-button-text text-dark" /></div>
        <div className='md:col-1'><Button label="Fish" className="p-button-text text-dark" /></div>
        <div className='md:col-1'><Button label="Oranges" className="p-button-text text-dark" /></div>
        <div className='md:col-1'><Button label="Lemons" className="p-button-text text-dark" /></div>
        <div className='md:col-1'><Button label="Seo tag" className="p-button-text text-dark" /></div>
        </div>
        <div className='grid col-12'>
        <div className='md:col-1'><Button label="Mushrooms" className="p-button-text text-dark" /></div>
        <div className='md:col-2 ml-4'><Button label="Chilli peppers" className="p-button-text text-dark" /></div>
        <div className='md:col-2 mr-4'><Button label="Watermelons" className="p-button-text text-dark" /></div>
        <div className='md:col-1'><Button label="Grapes" className="p-button-text text-dark" /></div>
        <div className='md:col-1'><Button label="Bananas" className="p-button-text text-dark" /></div>
        <div className='md:col-2'><Button label="Fresh food" className="p-button-text text-dark" /></div>
        </div>

        <div className='mt-4'><p>Copyright © 2020 petrbilek.com</p></div>

    </div>)
}

export default ProductFooter;