/// <reference path="product.ts" />

class productFactory {
    static GetProduct(): PepsiCola {
        return new PepsiCola();
    }
}