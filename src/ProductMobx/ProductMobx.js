import {makeAutoObservable} from 'mobx'
export default class ProductMobx{
    constructor(){
    this.product=[


    ]
    makeAutoObservable(this)
}


setProduct(products) {
    this.product = products;
}

get products() {
    return this.product;
}
}