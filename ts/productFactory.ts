/// <reference path="product.ts" />

class productFactory {
    static GetProduct(): IProduct {

        let products: IProduct[] = [ new PepsiCola(), new MAndMs(), new Samba(), new Lays() ];

        let rnd = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

        return products[rnd-1];
    }
}