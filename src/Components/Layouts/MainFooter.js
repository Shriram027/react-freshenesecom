import React from 'react';


const MainFooter = () => {
    return (
        <div className='mt-8'>
            <div className="grid col-12 ml-4">
                <div className="md:col-3 ">
                    <h4>Get in touch</h4>
                    <ul className='justify-content-center'>
                        <li className='mt-3 text-green-400'>About us</li>
                        <li className='mt-2 text-green-400'>Careers</li>
                        <li className='mt-2 text-green-400'>Press Releases</li>
                        <li className='mt-2 text-green-400'>Blog</li>
                    </ul>
                </div>
                <div className="md:col-3">
                    <h4>Connections</h4>
                    <ul className='justify-content-center'>
                        <li className='mt-3 text-green-400'>Facebook</li>
                        <li className='mt-2 text-green-400'>Twitter</li>
                        <li className='mt-2 text-green-400'>Instagram</li>
                        <li className='mt-2 text-green-400'>Youtube</li>
                        <li className='mt-2 text-green-400'>LinkedIn</li>
                    </ul></div>
                <div className="md:col-3">
                    <h4>Earnings</h4>
                    <ul className='justify-content-center'>
                        <li className='mt-3 text-green-400'>Become an Affiliate</li>
                        <li className='mt-2 text-green-400'>Advertise your product</li>
                        <li className='mt-2 text-green-400'>Sell on Market</li>
                    </ul></div>
                <div className="md:col-3 ">
                    <h4>Account</h4>
                    <ul className='justify-content-center'>
                        <li className='mt-3 text-green-400'>Your account</li>
                        <li className='mt-2 text-green-400'>Returns Centre</li>
                        <li className='mt-2 text-green-400'>100 % purchase protection</li>
                        <li className='mt-2 text-green-400'>Chat with us</li>
                        <li className='mt-2 text-green-400'>Help</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default MainFooter;