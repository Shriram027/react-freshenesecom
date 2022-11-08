import axios from 'axios';

export default class ProductService {

    getProductsSmall() {
     return axios.get('/data/Products-small.json').then(res => res.data.data);

    }

}