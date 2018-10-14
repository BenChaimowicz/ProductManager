class Stock {
    private _productList: Product[] = [];

    constructor() {
        
    }

    public addToList(product:Product) {
        this._productList.push(product);
    }
    
    public getList(name?: string): Product[] | Product {
        if (name) {
            let prodIndex: number = this.findNameInList(name);
            return this._productList[prodIndex];
        }
        return this._productList;
    }

    public findNameInList(name:string): number{
        for (let i = 0; i < this._productList.length; i++){
            if (this._productList[i].getName() == name) {
                return i;
            } else { alert('No such product in stock!');}
        }
    }
    
    
}
