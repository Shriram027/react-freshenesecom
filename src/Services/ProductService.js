import axios from 'axios';

export default class ProductService {

    getProductsSmall() {
     return axios.get('/src/Public/data/Products-small.json').then(res => res.data.data);

    }
}