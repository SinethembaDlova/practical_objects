const assert = require('assert');

console.log("Shopping list: ");

var printShoppingList = function()
{
  var shoppingList = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Bread', price : 19.50 }];

  for(var i = 0; i < shoppingList.length; i++)

    console.log(shoppingList[i].itemName + " @ " + shoppingList[i].price);
  }
}

printShoppingList()
