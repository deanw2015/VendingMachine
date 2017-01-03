var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Coin = (function () {
    function Coin(value, name) {
        this.value = value;
        this.name = name;
        this.imagePath = "content/images/";
        this.value = value;
    }
    return Coin;
}());
var Dollar = (function (_super) {
    __extends(Dollar, _super);
    function Dollar() {
        return _super.call(this, 1.00, "dollar") || this;
    }
    Dollar.prototype.getImageUrl = function () {
        return this.imagePath + "Dollar.png";
    };
    return Dollar;
}(Coin));
var Half = (function (_super) {
    __extends(Half, _super);
    function Half() {
        return _super.call(this, .50, "half") || this;
    }
    Half.prototype.getImageUrl = function () {
        return this.imagePath + "Half.png";
    };
    return Half;
}(Coin));
var Quarter = (function (_super) {
    __extends(Quarter, _super);
    function Quarter() {
        return _super.call(this, .25, "quarter") || this;
    }
    Quarter.prototype.getImageUrl = function () {
        return this.imagePath + "Quarter.png";
    };
    return Quarter;
}(Coin));
var Dime = (function (_super) {
    __extends(Dime, _super);
    function Dime() {
        return _super.call(this, .10, "dime") || this;
    }
    Dime.prototype.getImageUrl = function () {
        return this.imagePath + "Dime.png";
    };
    return Dime;
}(Coin));
var ProductCategory = (function () {
    function ProductCategory(name) {
        this.imagePath = "content/images/";
    }
    return ProductCategory;
}());
var SodaCategory = (function (_super) {
    __extends(SodaCategory, _super);
    function SodaCategory() {
        return _super.call(this, "Soda") || this;
    }
    SodaCategory.prototype.getImageUrl = function () {
        return this.imagePath + "SodaCan.png";
    };
    return SodaCategory;
}(ProductCategory));
var CandyCategory = (function (_super) {
    __extends(CandyCategory, _super);
    function CandyCategory() {
        return _super.call(this, "Candy") || this;
    }
    CandyCategory.prototype.getImageUrl = function () {
        return this.imagePath + "Candies.png";
    };
    return CandyCategory;
}(ProductCategory));
var ChipsCategory = (function (_super) {
    __extends(ChipsCategory, _super);
    function ChipsCategory() {
        return _super.call(this, "Chips") || this;
    }
    ChipsCategory.prototype.getImageUrl = function () {
        return this.imagePath + "Chips.png";
    };
    return ChipsCategory;
}(ProductCategory));
var CookiesCategory = (function (_super) {
    __extends(CookiesCategory, _super);
    function CookiesCategory() {
        return _super.call(this, "Cookies") || this;
    }
    CookiesCategory.prototype.getImageUrl = function () {
        return this.imagePath + "Cookies.png";
    };
    return CookiesCategory;
}(ProductCategory));
/// <reference path="productCategory.ts" />
var PepsiCola = (function () {
    function PepsiCola() {
        this.name = "Pepsi Cola";
        this.price = 1.75;
        this.category = new SodaCategory();
    }
    return PepsiCola;
}());
var MAndMs = (function () {
    function MAndMs() {
        this.name = "M&Ms";
        this.price = 0.80;
        this.category = new CandyCategory();
    }
    return MAndMs;
}());
/// <reference path="product.ts" />
var productFactory = (function () {
    function productFactory() {
    }
    productFactory.GetProduct = function () {
        return new PepsiCola();
    };
    return productFactory;
}());
/// <reference path="coin.ts" />
/// <reference path="typings/knockout.d.ts" />
/// <reference path="product.ts" />
/// <reference path="productFactory.ts" />
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.cells = ko.observableArray([]);
        this.selectedCell = ko.observable(new Cell(new PepsiCola()));
        this.canPay = ko.pureComputed(function () { return _this.paid() - _this.selectedCell().product.price >= 0; });
        this.selectCell = function (cell) {
            cell.sold(false);
            _this.selectedCell(cell);
        };
        this.acceptedCoins = [new Dollar(), new Half(), new Quarter(), new Dime()];
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.value);
        };
        this.pay = function () {
            if (_this.selectedCell().stock() < 1) {
                alert("Sorry, they're out of stock");
                return;
            }
            var currentPaid = _this.paid();
            // this.paid(currentPaid - this.selectedCell().product.price);
            _this.paid(Math.round(((currentPaid - _this.selectedCell().product.price) * 100)) / 100);
            var currentStock = _this.selectedCell().stock();
            _this.selectedCell().stock(currentStock - 1);
            _this.selectedCell().sold(true);
        };
    }
    Object.defineProperty(VendingMachine.prototype, "size", {
        set: function (givenSize) {
            for (var index = 0; index < givenSize; index++) {
                var product = productFactory.GetProduct();
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
}());
/// <reference path="vendingMachine.ts" />
var machine = new VendingMachine();
machine.size = VendingMachineSize.small;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map