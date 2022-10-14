import React from 'react';
import { InputText } from 'primereact/inputtext';
import { MegaMenu } from 'primereact/megamenu';


const item = [{label:'A'},{label:'B'},{label:'C'},{label:'D'},{label:'E'}];



const MiddleHeader = () => {
    return (
        <div className='container-fluid'>
            <div className='flex mt-4'>
                <div className='flex md:col-3 flex-row'>
                    <h1 className='mr-4'>Freshnesecom</h1>
                </div>
                <div className='flex md:col-6 flex-row mt-3'>
                <div class="flex align-items-center justify-content-center">
                        <span class="p-inputgroup-addon"><i class="pi pi-search"></i></span>
                        <InputText type="text" pInputText placeholder="Student Name" class="form-control" formControlName="firstName" />
                        
                    </div>
                </div>


                <div className='flex md:col-6 flex-row-reverse flex-wrap'>
                    <span className='mr-4 text-green-400'>Blog</span>
                    <span className='mr-4 text-green-400'>About</span>
                    <span className='mr-4 text-green-400'>Careers</span>
                </div>
            </div>
        </div>


    )
}

export default MiddleHeader;