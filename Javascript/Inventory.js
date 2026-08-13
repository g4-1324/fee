// console.log("Hello...");
// console.log("\n");
// console.log("\tHello Ansh");
// console.log();

const prompt=require("prompt-sync")();
var name=prompt("enter your name: ");
console.log("you entered:",name)


//*objecs

console.clear();
console.log("Inventory entry system");
console.log();
const prompt = require("prompt-sync")();
let stock = [];

function addStock() {
    let item_code = Number(prompt("enter item code: "));
    let item_name = prompt("enter item name: ");
    let item_price = Number(prompt("enter price: "));
    let item_quantity = Number(prompt("enter quantity: "));

    let item = {
        code: item_code,
        items: item_name,
        prices: item_price,
        quantity: item_quantity,
    };

    stock.push(item);
    console.log("\ninventory updated: ");
    console.log();
}

while (true) {
    addStock();
    let loop = prompt("Add more items (0 for No / 1 for Yes): ");
    loop = parseInt(loop);
    if (loop === 0) {
        break;
    }
}

console.log("\nInventory Entry Completed");
console.log("\nUpdated stock is as follows");
console.log(stock);
console.log();
