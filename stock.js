"use strict";
class Stock {
    constructor() {
        this._productList = [];
    }
    addToList(product) {
        this._productList.push(product);
    }
    getList(name) {
        if (name) {
            let prodIndex = this.findNameInList(name);
            return this._productList[prodIndex];
        }
        return this._productList;
    }
    findNameInList(name) {
        for (let i = 0; i < this._productList.length; i++) {
            if (this._productList[i].getName() == name) {
                return i;
            }
            else {
                alert('No such product in stock!');
            }
        }
    }
}
