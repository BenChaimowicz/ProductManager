"use strict";
class Product {
    constructor(name, price, weight, kosher, manufacturer, expiryDate) {
        this._name = name;
        this._priceShekels = price;
        this._weigthKGs = weight;
        this._kosher = kosher;
        this._manufacturer = manufacturer;
        this._expiryDate = expiryDate;
    }
    getName() {
        return this._name;
    }
    getPrice() {
        return this._priceShekels;
    }
    addToStock() {
        STOCK.addToList(this);
    }
    printAllInfo() {
        let info;
        info += 'שם המוצר: ' + this._name + '</br>';
        info += 'מחיר בשקלים: ' + this._priceShekels + '</br>';
        info += 'משקל בק"ג: ' + this._weigthKGs + '</br>';
        this._kosher ? info += 'המוצר כשר' + '</br>' : info += 'המוצר אינו כשר' + '</br>';
        info += 'יצרן: ' + this._manufacturer + '</br>';
        info += 'תאריך תפוגה: ' + this._expiryDate;
        return info;
    }
    printBasicInfo() {
        let info;
        info += 'שם המוצר: ' + this._name + '</br>';
        info += 'מחיר בשקלים: ' + this._priceShekels + '</br>';
        return info;
    }
    pricePerKG() {
        let priceForKG = this._priceShekels / this._weigthKGs;
        return priceForKG;
    }
    compareProductsByPrice(prod) {
        if (prod.getPrice() > this.getPrice()) {
            return prod;
        }
        else {
            return this;
        }
        ;
    }
    checkExpired() {
        let currDate = new Date();
        if (this._expiryDate > currDate) {
            return false;
        }
        else {
            return true;
        }
    }
}
