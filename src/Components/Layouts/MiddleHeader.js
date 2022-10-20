import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';



// const aquaticCreatures = [
//     { label: 'Bakery', value: 'Bakery' },
//     { label: 'Fruits & Vegetables', value: 'Fruits & Vegetables' },
//     { label: 'Meat & Fish', value: 'Meat & Fish' },
//     { label: 'Drinks', value: 'Drinks' },
//     { label: 'Kitchen', value: 'Kitchen' },
//     { label: 'Special nutrition', value: 'Special nutrition' },
//     { label: 'Baby', value: 'Baby' },
//     { label: 'Pharmacy', value: 'Pharmacy' },
// ];







const MiddleHeader = () => {
    return (
        <div className='container-fluid'>
            <div className='flex mt-4'>
                <div className="flex md:col-12 flex-row justify-content center">
                    <div className='flex md:col-3 flex-row'>
                        <h3 className='mr-4'>Freshnesecom</h3>
                    </div>
                    <div className='flex md:col-6 ml-8 p-inputgroup flex-row'>
                        {/* <span><Select placeholder="All Categories" options={aquaticCreatures} /></span> */}
                        <InputText placeholder="Search products,categories..."></InputText>
                        <span className="p-inputgroup-addon"><i className="pi pi-search"></i></span>
                    </div>

                    <div className='flex md:col-3 flex-row'>
                        <span><i className="pi pi-shopping-bag ml-8 p-text-danger p-overlay-badge" style={{ fontSize: '18px' }}><Badge value="2" severity="danger"></Badge></i></span>
                        <span className='ml-4'><i className="pi pi-user"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleHeader;