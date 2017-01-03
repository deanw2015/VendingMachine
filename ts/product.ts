/// <reference path="productCategory.ts" />

interface Product {
    name: string;
    price: number;
    category?: ProductCategory;
}

class Initial implements Product {
    name = "Please select a product";
    price = 0;
}

class PepsiCola implements Product {
    name = "Pepsi Cola";
    price = 1.75;
    category = new SodaCategory();
}

class Sprite implements Product {
    name = "Sprite";
    price = 1.75;
    category = new LemonadeCategory();
}

class MAndMs implements Product {
     name = "M&Ms";
     price = 0.80;
     category = new CandyCategory();
}

class Samba implements Product {
     name = "Samba";
     price = 0.95;
     category = new CookiesCategory();
}

class Lays implements Product {
     name = "Lays";
     price = 0.50;
     category = new ChipsCategory();
}

class DairyMilk implements Product {
     name = "Dairy Milk";
     price = 0.65;
     category = new ChocolateCategory();
}