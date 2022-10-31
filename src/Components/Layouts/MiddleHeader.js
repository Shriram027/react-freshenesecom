import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import 'primeicons/primeicons.css';



const MiddleHeader = () => {
    return (
        <div className='container-fluid'>
            <div className=' mt-4'>
                <div className="grid col-12 justify-content center">
                    <div className='grid md:col-3'>
                        <h3 className='mr-4'>Freshnesecom</h3>
                    </div>
                    <div className='grid md:col-6 p-inputgroup justify-content center'>
                        <InputText placeholder="Search products,categories..." />
                        <span className="p-inputgroup-addon"><i className="pi pi-search"></i></span>
                    </div>
                    <div className='grid md:col-3 justify-content-end'>
                        <span><i className="pi pi-shopping-bag ml-8 p-text-danger p-overlay-badge" style={{ fontSize: '18px' }}><Badge value="2" severity="danger"></Badge></i></span>
                        <span className='ml-4'><i className="pi pi-user"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleHeader;