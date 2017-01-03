abstract class Coin {
    constructor(public value: number, private name: string) {
        this.value = value;
    }

    protected imagePath = "content/images/";
    abstract getImageUrl() : string
}

class Dollar extends Coin {
    constructor() {
        super(1.00, "dollar");
    }
    getImageUrl(): string {
        return this.imagePath + "Dollar.png";
    }
}

class Half extends Coin {
    constructor() {
        super(.50, "half");
    }
    getImageUrl(): string {
        return this.imagePath + "Half.png";
    }
}

class Quarter extends Coin {
    constructor() {
        super(.25, "quarter");
    }
    getImageUrl(): string {
        return this.imagePath + "Quarter.png";
    }
}

class Dime extends Coin {
    constructor() {
        super(.10, "dime");
    }
    getImageUrl(): string {
        return this.imagePath + "Dime.png";
    }
}

