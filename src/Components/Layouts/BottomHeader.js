import React from 'react';


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
                            <li><a className="dropdown-item" >Milk</a></li>
                            <li><a className="dropdown-item" >Butter</a></li>
                            <li><a className="dropdown-item" >Cheeze</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown">
                            Fruits and vegetables
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" >Apples</a></li>
                            <li><a className="dropdown-item" >Peas</a></li>
                            <li><a className="dropdown-item" >Papaya</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown">
                            Meat and fish
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" >Fresh Fishes</a></li>
                            <li><a className="dropdown-item" >Chicken</a></li>
                            <li><a className="dropdown-item" >Mutton</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown">
                            Drinks
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" >Cold drinks</a></li>
                            <li><a className="dropdown-item" >Water</a></li>
                            <li><a className="dropdown-item" >Wine</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown">
                            Kitchen
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" >Sugar</a></li>
                            <li><a className="dropdown-item" >Tea</a></li>
                            <li><a className="dropdown-item" >Coffee</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown">
                            Special nutrition
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" >Protiens</a></li>
                            <li><a className="dropdown-item" >Mass gainer</a></li>
                            <li><a className="dropdown-item" >Whey protien</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                            Baby
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" >Chocklate</a></li>
                            <li><a className="dropdown-item" >Snacks and wappers</a></li>
                            <li><a className="dropdown-item" >Biscuits</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                            Pharmacy
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" >Pain killer</a></li>
                            <li><a className="dropdown-item" >First-add</a></li>
                            <li><a className="dropdown-item" >Fractures</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomHeader;