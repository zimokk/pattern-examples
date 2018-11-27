

interface Goods {
    getPrice(): number;
}

class Present implements Goods {
    private price: number;

    constructor(initialPrice: number) {
        this.price = initialPrice;
    };

    getPrice(): number {
        return this.price;
    };
}

class Box implements Goods {
    private giftsList: Goods[] = [];

    constructor(gifts: Goods[]) {
        this.giftsList = gifts;
    };

    getPrice(): number {
        // Sum of all inner goodies
        return this.giftsList.reduce((sum, nextItem) => sum + nextItem.getPrice(), 0);
    };
}










let present1 = new Present(100);
let present2 = new Present(20);
let box1 = new Box([present1, present2]);
console.log(box1.getPrice()); // 120
let ComboBox = new Box([box1, present2]);
console.log(ComboBox.getPrice()); //140
let MegaComboBox = new Box([ComboBox, box1, present2]); 280
console.log(MegaComboBox.getPrice());

/////////////////////////////////////

// DOM model, HTML elements