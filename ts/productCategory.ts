abstract class ProductCategory {
    protected imagePath = "content/images/";
    protected soundPath = "content/audio/";
    constructor(name: string) { }

abstract getImageUrl(): string;
abstract getSoundUrl(): string;
}

class SodaCategory extends ProductCategory {
    constructor() { 
        super("Soda");
     }
    getImageUrl() {
        return this.imagePath + "Pepsi.png";
    }
    getSoundUrl() {
        return this.soundPath + "CanDrop.wav";
    }
}

class LemonadeCategory extends ProductCategory {
    constructor() { 
        super("Lemonade");
     }
    getImageUrl() {
        return this.imagePath + "Sprite.png";
    }
    getSoundUrl() {
        return this.soundPath + "CanDrop.wav";
    }
}

class CandyCategory extends ProductCategory {
    constructor() { 
        super("Candy");
     }
    getImageUrl() {
        return this.imagePath + "Candies.png";
    }
    getSoundUrl() {
        return this.soundPath + "CanDrop.wav";
    }
}

class ChipsCategory extends ProductCategory {
    constructor() { 
        super("Chips");
     }
    getImageUrl() {
        return this.imagePath + "Chips.png";
    }
    getSoundUrl() {
        return this.soundPath + "CanDrop.wav";
    }
}

class CookiesCategory extends ProductCategory {
    constructor() { 
        super("Cookies");
     }
    getImageUrl() {
        return this.imagePath + "Cookies.png";
    }
    getSoundUrl() {
        return this.soundPath + "CanDrop.wav";
    }
}

class ChocolateCategory extends ProductCategory {
    constructor() { 
        super("Chocolate");
     }
    getImageUrl() {
        return this.imagePath + "DairyMilk.png";
    }
    getSoundUrl() {
        return this.soundPath + "CanDrop.wav";
    }
}