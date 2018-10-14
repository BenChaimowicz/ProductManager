class Product {
    private _name: string;
    private _priceShekels: number;
    private _weigthKGs: number;
    private _kosher: boolean;
    private _manufacturer: string;
    private _expiryDate: Date;

    constructor(name: string, price: number, weight: number, kosher: boolean, manufacturer: string, expiryDate: Date) {
        this._name = name;
        this._priceShekels = price;
        this._weigthKGs = weight;
        this._kosher = kosher;
        this._manufacturer = manufacturer;
        this._expiryDate = expiryDate;
    }

    public getName(): string {
        return this._name;
    }

    public getPrice(): number {
        return this._priceShekels;
    }
    public addToStock() {
        STOCK.addToList(this);
    }

    public printAllInfo(): string {
        let info: string;
        info += 'שם המוצר: ' + this._name + '</br>';
        info += 'מחיר בשקלים: ' + this._priceShekels + '</br>';
        info += 'משקל בק"ג: ' + this._weigthKGs + '</br>';
        this._kosher ? info += 'המוצר כשר' + '</br>' : info += 'המוצר אינו כשר' + '</br>';
        info += 'יצרן: ' + this._manufacturer + '</br>';
        info += 'תאריך תפוגה: ' + this._expiryDate;
        return info;
    }

    public printBasicInfo(): string {
        let info: string;
        info += 'שם המוצר: ' + this._name + '</br>';
        info += 'מחיר בשקלים: ' + this._priceShekels + '</br>';
        return info;
    }
    
    public pricePerKG(): number {
        let priceForKG: number = this._priceShekels / this._weigthKGs;
        return priceForKG;
    }
    
    public compareProductsByPrice(prod: Product): Product {
        if (prod.getPrice() > this.getPrice()) {
            return prod;
        } else { return this; };
    }

    public checkExpired(): boolean{
        let currDate: Date = new Date();
        if (this._expiryDate > currDate) {
            return false;
        } else { return true;}
    }
}
