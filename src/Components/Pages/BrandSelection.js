import React, {useState} from 'react';
import { Checkbox } from 'primereact/checkbox';


const BrandSelection = ()=>{

const categories = [{ name: 'Accounting', key: 'A' }, { name: 'Marketing', key: 'M' }, { name: 'Production', key: 'P' }, { name: 'Research', key: 'R' }];
    const [checked, setChecked] = useState(false);
    const [cities, setCities] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState(categories.slice(1, 3));

    const onCategoryChange = (e) => {
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


    const onCityChange = (e) => {
        let selectedCities = [...cities];

        if (e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        setCities(selectedCities);
    }

    return (<>
        


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
                </>
)

}

export default BrandSelection;

                