import React from 'react';
import '../Stylesheets/Topheader.css';



const Topheader = () => {
    return (
        <div className='container-fluid'>
            <div className='flex mt-4'>
                <div className='flex md:col-6 flex-row'>
                    <span className='mr-4 text-green-400'>Chat with us!</span>
                    <span className='mr-4' >+420 336 775 664</span>
                    <span className='mr-4'>info@freshnesecom.com</span>
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

export default Topheader;