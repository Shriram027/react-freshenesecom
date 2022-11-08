import React, { useState } from 'react';
import GridFruits from '../GridViews/GridFruits';
import FruitList from '../ListViews/FruitsList';
import { NavLink } from 'react-router-dom';
import { Button } from 'primereact/button';


const FruitView = ({countData}) => {
    const [cName, setClassName] = useState('jsGridView');
    // const sty = {
    //     textDecoration: "none"
    // }
    return (<>
        <div className='grid col-12 mt-4'>
            <div className='md:col-4 ml-2'>
                <h5>Fruit & Vegetables</h5>
            </div>
            <div className='grid md:col-8 justify-content-end'>
                <Button label="Grid view" className="p-button-text" icon="pi pi-table" onClick={() => setClassName('jsGridView')} />
                <Button label="List view" className="p-button-text" icon="pi pi-list" onClick={() => setClassName('jsListView')} />

                <span className='ml-4'><NavLink className='text-green-400'>{countData}</NavLink> Products</span>
            </div>
        </div>
        <div className="col-12">
   <div className={cName}>   
   { cName === 'jsGridView' ? <GridFruits/> : <FruitList/> } 
   </div>
</div>
    </>)
}

export default FruitView;