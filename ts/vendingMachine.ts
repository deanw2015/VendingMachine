/// <reference path="coin.ts" />
/// <reference path="typings/knockout.d.ts" />
/// <reference path="product.ts" />
/// <reference path="productFactory.ts" />

enum VendingMachineSize {
    small = 6,
    medium = 9, 
    large = 12
}

class Cell {
    constructor(public product: Product) { }
    
    stock = ko.observable(3);
    sold = ko.observable(false);
}

class VendingMachine {
    private paid = ko.observable(0);
    cells = ko.observableArray([]);
    selectedCell = ko.observable(new Cell(new Initial()));
    canPay = ko.pureComputed(() => this.selectedCell().product.price > 0 && this.paid() - this.selectedCell().product.price >= 0);

    set size(givenSize: VendingMachineSize){

        for (let index = 0; index < givenSize; index++) {
            let product = productFactory.GetProduct();
            this.cells.push(new Cell(product));
        }
    }

    selectCell = (cell: Cell) : void => { 
        cell.sold(false);
        this.selectedCell(cell);
     };

    acceptedCoins: Coins.Coin[] = [new Coins.Dollar(), new Coins.Half(), new Coins.Quarter(), new Coins.Dime()];

    acceptCoin = (coin: Coins.Coin) : void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.value);
        let snd = new Audio(coin.getSoundUrl()); // buffers automatically when created
        snd.play();
    }

    pay = (): void => {
        if(this.selectedCell().stock() < 1) {
            alert("Sorry, they're out of stock");
            return;
        }
        let currentPaid = this.paid();
        // this.paid(currentPaid - this.selectedCell().product.price);
        this.paid(Math.round(((currentPaid - this.selectedCell().product.price) * 100)) / 100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
        let snd = new Audio(this.selectedCell().product.category.getSoundUrl());
        snd.play();
    }
}