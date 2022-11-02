import axios from 'axios';

export default class ProductService {

    getProductsSmall() {
     return axios.get('/data/Products-small.json').then(res => res.data.data);

    }

    getProducts(){
        let a =  axios.get('https://freshness-app-new.herokuapp.com/products').then(result=>result);
        console.log(a);
        return a;
    }
}