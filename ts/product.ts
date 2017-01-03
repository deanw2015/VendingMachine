/// <reference path="productCategory.ts" />

interface IProduct {
    name: string;
    price: number;
    category?: ProductCategory;
}

class PepsiCola implements IProduct {
    name = "Pepsi Cola";
    price = 1.75;
    category = new SodaCategory();
}

class MAndMs implements IProduct {
     name = "M&Ms";
     price = 0.80;
     category = new CandyCategory();
}