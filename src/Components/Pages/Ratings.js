import React, {useState} from 'react';
import { RadioButton } from 'primereact/radiobutton';


const Ratings = ()=>{
    const categorios = [{ name: 'Accounting', key: 'A' }, { name: 'Marketing', key: 'M' }, { name: 'Production', key: 'P' }, { name: 'Research', key: 'R' }, { name: 'India', key: 'I' }];
    const [city, setCity] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(categorios[1]);


    return(<>
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
    </>)

}

export default Ratings;