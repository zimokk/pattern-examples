var Present = /** @class */ (function () {
    function Present(initialPrice) {
        this.price = initialPrice;
    }
    ;
    Present.prototype.getPrice = function () {
        return this.price;
    };
    ;
    return Present;
}());
var Box = /** @class */ (function () {
    function Box(gifts) {
        this.giftsList = [];
        this.giftsList = gifts;
    }
    ;
    Box.prototype.getPrice = function () {
        // Sum of all inner goodies
        return this.giftsList.reduce(function (sum, nextItem) { return sum + nextItem.getPrice(); }, 0);
    };
    ;
    return Box;
}());
// let present1 = new Present(100);
// let present2 = new Present(20);
// let box1 = new Box([present1, present2]);
// console.log(box1.getPrice()); // 120
// let ComboBox = new Box([box1, present2]);
// console.log(ComboBox.getPrice()); //140
// let MegaComboBox = new Box([ComboBox, box1, present2]); 280
// console.log(MegaComboBox.getPrice());
/////////////////////////////////////
// DOM model, HTML elements
