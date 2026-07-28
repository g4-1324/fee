// console.clear();
// todo:- Billing operations with use of arrays and objects

const PromptSync = require("prompt-sync");

// const storeName = "Ash Mart"
// {
//     var item = "Shoes";
//     var item = "Smartphone"
//     console.log(item);
// }
//     var item = "outer";
//     console.log(item);
//     console.log();

//* Array:

// items.push('item 6');
// items.pop();
// items.shift();
// items.unshift("item 0");
// items.sort();
// items.reverse();
// console.log(items);

// let items=["item 1","item 3","item 2","item 4","item 5"];
// let prices=[200,200,300,500,100];
// console.log("Sr.no.","\t","Items","\t\t","Prices");
// for(let i=0;i<prices.length;i++){
//     console.log((i+1),"\t",items[i],"\t",prices[i]);
// }

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
