import React from 'react';
import { NavLink } from 'react-router-dom';
// import { SelectButton } from 'primereact/selectbutton';
import Categories from './Categories';



const Fruit = () => {
    const sty = {
        textDecoration: "none"
    }

    return (<>
        <div className='grid col-12 mt-4'>
            <div className='md:col-4 ml-2'>
                <h5>Fruit & Vegetables</h5>
            </div>
            <div className='grid md:col-8 justify-content-end'>
                <span><i className="pi pi-table"></i> Grid view</span>
                <span className='ml-4'><i className="pi pi-list"></i> List view</span>
                <span className='ml-4'><NavLink className='text-green-400' style={sty}>117 </NavLink> Products</span>
            </div>
        </div>
        <Categories/>
    </>
    )
}
export default Fruit;