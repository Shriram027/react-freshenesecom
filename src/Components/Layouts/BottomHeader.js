import React from 'react';
import {NavLink} from 'react-router-dom';


const BottomHeader = () => {
    return (
        <div className='container-fluid'>
            <div className='flex mt-4'>
                <div className='flex md:col-12 flex-row justify-content-center'>
                    <div className="dropdown">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                            Bakery
                        </button>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item">Milk</li>
                            <li className="dropdown-item">Butter</li>
                            <li className="dropdown-item">Cheeze</li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown">
                            Fruits and vegetables
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                        <NavLink className="dropdown-item"  to="/fruits">Apples</NavLink></li>
                            
                            <li className="dropdown-item" >Peas</li>
                            <li className="dropdown-item" >Papaya</li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown">
                            Meat and fish
                        </button>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item" >Fresh Fishes</li>
                            <li className="dropdown-item" >Chicken</li>
                            <li className="dropdown-item" >Mutton</li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown">
                            Drinks
                        </button>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item" >Cold drinks</li>
                            <li className="dropdown-item" >Water</li>
                            <li className="dropdown-item" >Wine</li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown">
                            Kitchen
                        </button>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item" >Sugar</li>
                            <li className="dropdown-item" >Tea</li>
                            <li className="dropdown-item" >Coffee</li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown">
                            Special nutrition
                        </button>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item" >Protiens</li>
                            <li className="dropdown-item" >Mass gainer</li>
                            <li className="dropdown-item" >Whey protien</li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                            Baby
                        </button>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item" >Chocklate</li>
                            <li className="dropdown-item" >Snacks and wappers</li>
                            <li className="dropdown-item" >Biscuits</li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                            Pharmacy
                        </button>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item" >Pain killer</li>
                            <li className="dropdown-item" >First-add</li>
                            <li className="dropdown-item" >Fractures</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomHeader;