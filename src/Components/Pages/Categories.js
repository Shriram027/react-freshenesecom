import React from 'react';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { Slider } from 'primereact/slider';
import { useState } from 'react';




const Categories = () => {

    const sliderStyle = {
        width: "150px"
    }

    const sty = {
        textDecoration: "none"
    }

    const [value5, setValue5] = useState([20, 80]);

    const categorios = [{ name: 'Accounting', key: 'A' }, { name: 'Marketing', key: 'M' }, { name: 'Production', key: 'P' }, { name: 'Research', key: 'R' }, { name: 'India', key: 'I' }];
    const [city, setCity] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(categorios[1]);

    const categories = [{ name: 'Accounting', key: 'A' }, { name: 'Marketing', key: 'M' }, { name: 'Production', key: 'P' }, { name: 'Research', key: 'R' }];
    const [checked, setChecked] = useState(false);
    const [cities, setCities] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState(categories.slice(1, 3));

    const onCategoryChange = (e: { value: any, checked: boolean }) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked) {
            _selectedCategories.push(e.value);
        }
        else {
            for (let i = 0; i < _selectedCategories.length; i++) {
                const selectedCategory = _selectedCategories[i];

                if (selectedCategory.key === e.value.key) {
                    _selectedCategories.splice(i, 1);
                    break;
                }
            }
        }

        setSelectedCategories(_selectedCategories);
    }


    const onCityChange = (e: { value: any, checked: boolean }) => {
        let selectedCities = [...cities];

        if (e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        setCities(selectedCities);
    }

    return (<>
        <div className='grid col-12 mt-6'>
            <div className='md:col-3 ml-2'>
                <h4>Categories</h4>
                <ul className='mt-4'>
                    <li>Category name <span className='ml-8 text-green-400 '>332</span></li>
                    <li className='mt-2'>Category name <span className='ml-8 mt-8 text-green-400 '>112</span></li>
                    <li className='mt-2'>Category name <span className='ml-8 mt-8 text-green-400 '> 32</span></li>
                    <li className='mt-2'>Category name <span className='ml-8 mt-8 text-green-400 '> 48</span></li>
                </ul>


                <h4 className='mt-6'>Brands</h4>
                <div className="field-checkbox ml-4 mt-4">
                    <Checkbox inputId="fruit1" name="fruit" value="Alphanso" onChange={onCityChange} checked={cities.indexOf('Alphanso') !== -1} />
                    <label htmlFor="city1">Alphanso</label>
                </div>
                <div className="field-checkbox ml-4">
                    <Checkbox inputId="fruit2" name="fruit" value="Dusseheri" onChange={onCityChange} checked={cities.indexOf('Dusseheri') !== -1} />
                    <label htmlFor="city2">Dusseheri</label>
                </div>
                <div className="field-checkbox ml-4">
                    <Checkbox inputId="fruit3" name="fruit" value="Chausa" onChange={onCityChange} checked={cities.indexOf('Chausa') !== -1} />
                    <label htmlFor="city3">Chausa</label>
                </div>
                <div className="field-checkbox ml-4">
                    <Checkbox inputId="fruit4" name="fruit" value="Badami" onChange={onCityChange} checked={cities.indexOf('Badami') !== -1} />
                    <label htmlFor="city4">Badami</label>
                </div>




                <h4 className='mt-6 '>Ratings</h4>
                <div className="mt-4 ml-4">
                    <div className="field-radiobutton text-yellow-500">
                        <RadioButton inputId="city1" name="city" value="5" onChange={(e) => setCity(e.value)} checked={city === 'Chicago'} />
                        <label htmlFor="city1"><small><i className='pi pi-star-fill'></i> <i className='pi pi-star-fill'></i> <i className='pi pi-star-fill'></i> <i className='pi pi-star-fill'></i> <i className='pi pi-star-fill'></i></small></label>
                    </div>
                    <div className="field-radiobutton text-yellow-500">
                        <RadioButton inputId="city2" name="city" value="4" onChange={(e) => setCity(e.value)} checked={city === 'Los Angeles'} />
                        <label htmlFor="city2"><small><i className='pi pi-star-fill'></i> <i className='pi pi-star-fill'></i> <i className='pi pi-star-fill'></i> <i className='pi pi-star-fill'></i></small></label>
                    </div>
                    <div className="field-radiobutton text-yellow-500">
                        <RadioButton inputId="city3" name="city" value="3" onChange={(e) => setCity(e.value)} checked={city === 'New York'} />
                        <label htmlFor="city3"><small><i className='pi pi-star-fill'></i> <i className='pi pi-star-fill'></i> <i className='pi pi-star-fill'></i></small></label>
                    </div>
                    <div className="field-radiobutton text-yellow-500">
                        <RadioButton inputId="city4" name="city" value="2" onChange={(e) => setCity(e.value)} checked={city === 'San Francisco'} />
                        <label htmlFor="city4"><small> <i className='pi pi-star-fill'></i> <i className='pi pi-star-fill'></i></small></label>
                    </div>
                    <div className="field-radiobutton text-yellow-500">
                        <RadioButton inputId="city5" name="city" value="1" onChange={(e) => setCity(e.value)} checked={city === 'San Francisco'} />
                        <label htmlFor="city5"><small><i className='pi pi-star-fill'></i></small></label>
                    </div>
                </div>

                <h4 className='mt-6'>Price</h4>
                <Slider className='mt-4' value={value5} style={sliderStyle} onChange={(e) => setValue5(e.value)} range />
                <div>
                    <span>
                        <h5>min</h5>
                        <input type="text" style={{ width: "50px" }} placeholder="000"></input>
                    </span>
                    <span>
                        <h5>max</h5>
                        <input type="text" style={{ width: "50px" }} placeholder="000"></input>
                    </span>
                </div>
                <Button className='mt-2' label="Apply"/>


            </div>

            <div className='md:col-8'>
                <div className='card'>
                    <div className='grid col-12'>
                        <div className='md:col-4'>
                            <div className='card w-10'>
                                <img src="https://m.media-amazon.com/images/I/31lES8WxX4L.jpg" alt="fruit" height="240px" width='237px' />
                            </div>

                        </div>
                        <div className='md:col-4'>
                            <h4>Alphonso fresh</h4>
                            <h6 className='text-gray-500'>Ever fresh delicious mango.</h6>
                            <small><i className='pi pi-star-fill'></i> <i className='pi pi-star-fill'></i> <i className='pi pi-star-fill'></i> <i className='pi pi-star-fill'></i></small>
                            <h6 className='mt-4'>Freshness <span className='ml-5'>New (Extra fresh)</span></h6>
                            <h6 className='mt-2'>Farm<span className='ml-7'>Grocery term fields</span></h6>
                            <h6 className='mt-2'>Delivery<span className='ml-6'>Europe</span></h6>
                            <h6 className='mt-2'>Stock<span className='ml-7'>320 pcs</span></h6>
                        </div>

                        <div className='md:col-3 ml-6' style={sty}>
                            <h3><ins>30.06</ins> <br /> <small className='text-gray-500'><del>46.08</del></small></h3>
                            <h5 className='text-gray'>Free shipping</h5>
                            <small>Delivery in 1 day</small><br />
                            <Button className='mt-2' label="Product detail" icon="pi pi-angle-right" iconPos="right" />
                            <Button label="Add to wishlist" className="mt-2 p-button-text text-dark" icon="pi pi-heart" iconPos="left" />
                        </div>
                    </div>
                </div>
            </div>

        </div>


    </>
    )
}

export default Categories;