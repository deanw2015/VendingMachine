abstract class ProductCategory {
    protected imagePath = "content/images/";
    constructor(name: string) { }

abstract getImageUrl(): string;
}

class SodaCategory extends ProductCategory {
    constructor() { 
        super("Soda");
     }
    getImageUrl() {
        return this.imagePath + "SodaCan.png";
    }
}

class CandyCategory extends ProductCategory {
    constructor() { 
        super("Candy");
     }
    getImageUrl() {
        return this.imagePath + "Candies.png";
    }
}

class ChipsCategory extends ProductCategory {
    constructor() { 
        super("Chips");
     }
    getImageUrl() {
        return this.imagePath + "Chips.png";
    }
}

class CookiesCategory extends ProductCategory {
    constructor() { 
        super("Cookies");
     }
    getImageUrl() {
        return this.imagePath + "Cookies.png";
    }
}