import React from 'react';


const MainFooter = () => {
    return (
        <div className='mt-8'>
            <div className="grid col-12  ml-8">
                <div className="md:col-3 text-align-center">
                    <h4>Get in touch</h4>
                <ul className='justify-content-center'>
                    <li className='mt-3 text-green-400'><a>About us</a></li>
                    <li className='mt-2 text-green-400'><a>Careers</a></li>
                    <li className='mt-2 text-green-400'><a>Press Releases</a></li>
                    <li className='mt-2 text-green-400'><a>Blog</a></li>
                    </ul>
                    </div>
                <div className="md:col-3 text-align-center ">
                    <h4>Connections</h4>
                <ul className='justify-content-center'>
                    <li className='mt-3 text-green-400'><a>Facebook</a></li>
                    <li className='mt-2 text-green-400'><a>Twitter</a></li>
                    <li className='mt-2 text-green-400'><a>Instagram</a></li>
                    <li className='mt-2 text-green-400'><a>Youtube</a></li>
                    <li className='mt-2 text-green-400'><a>LinkedIn</a></li>
                    </ul></div>
                <div className="md:col-3 text-align-center">
                    <h4>Earnings</h4>
                <ul>
                    <li className='mt-3 text-green-400'><a>Become an Affiliate</a></li>
                    <li className='mt-2 text-green-400'><a>Advertise your product</a></li>
                    <li className='mt-2 text-green-400'><a>Sell on Market</a></li>
                    </ul></div>
                <div className="md:col-3 text-align-center">
                    <h4>Account</h4>
                <ul>
                    <li className='mt-3 text-green-400'><a>Your account</a></li>
                    <li className='mt-2 text-green-400'><a>Returns Centre</a></li>
                    <li className='mt-2 text-green-400'><a>100 % purchase protection</a></li>
                    <li className='mt-2 text-green-400'><a>Chat with us</a></li>
                    <li className='mt-2 text-green-400'><a>Help</a></li>
                    </ul></div>
            </div>
        </div>
        )
}


export default MainFooter;