/// <reference path="product.ts" />

class productFactory {
    static GetProduct(): Product {

        let products: Product[] = [ new Sprite(), new PepsiCola(), new MAndMs(), new Samba(), new Lays(), new DairyMilk() ];

        let rnd = Math.floor(Math.random() * 6);

        return products[rnd];
    }
}