namespace Coins {
    export abstract class Coin {
        constructor(public value: number, private name: string) {
            this.value = value;
        }

        protected imagePath = "content/images/";
        protected soundPath = "content/audio/";
        abstract getImageUrl() : string
        abstract getSoundUrl() : string
    }

    export class Dollar extends Coin {
        constructor() {
            super(1.00, "dollar");
        }
        getImageUrl(): string {
            return this.imagePath + "Dollar.png";
        }
        getSoundUrl(): string {
            return this.soundPath + "Coin1.wav";
        }
        
    }

    export class Half extends Coin {
        constructor() {
            super(.50, "half");
        }
        getImageUrl(): string {
            return this.imagePath + "Half.png";
        }        
        getSoundUrl(): string {
            return this.soundPath + "Coin2.wav";
        }
    }

    export class Quarter extends Coin {
        constructor() {
            super(.25, "quarter");
        }
        getImageUrl(): string {
            return this.imagePath + "Quarter.png";
        }
        
        getSoundUrl(): string {
            return this.soundPath + "Coin3.wav";
        }
    }

    export class Dime extends Coin {
        constructor() {
            super(.10, "dime");
        }
        getImageUrl(): string {
            return this.imagePath + "Dime.png";
        }
        
        getSoundUrl(): string {
            return this.soundPath + "Coin4.wav";
        }
    }
}