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
                            <li><a className="dropdown-item" href="#">Milk</a></li>
                            <li><a className="dropdown-item" href="#">Butter</a></li>
                            <li><a className="dropdown-item" href="#">Cheeze</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown">
                            Fruits and vegetables
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Apples</a></li>
                            <li><a className="dropdown-item" href="#">Peas</a></li>
                            <li><a className="dropdown-item" href="#">Papaya</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown">
                            Meat and fish
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Fresh Fishes</a></li>
                            <li><a className="dropdown-item" href="#">Chicken</a></li>
                            <li><a className="dropdown-item" href="#">Mutton</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown">
                            Drinks
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Cold drinks</a></li>
                            <li><a className="dropdown-item" href="#">Water</a></li>
                            <li><a className="dropdown-item" href="#">Wine</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown">
                            Kitchen
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Sugar</a></li>
                            <li><a className="dropdown-item" href="#">Tea</a></li>
                            <li><a className="dropdown-item" href="#">Coffee</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown">
                            Special nutrition
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Protiens</a></li>
                            <li><a className="dropdown-item" href="#">Mass gainer</a></li>
                            <li><a className="dropdown-item" href="#">Whey protien</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                            Baby
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Chocklate</a></li>
                            <li><a className="dropdown-item" href="#">Snacks and wappers</a></li>
                            <li><a className="dropdown-item" href="#">Biscuits</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                            Pharmacy
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Pain killer</a></li>
                            <li><a className="dropdown-item" href="#">First-add</a></li>
                            <li><a className="dropdown-item" href="#">Fractures</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomHeader;