const assert = require('assert');


console.log("Shopping list: ");
console.log("");

var printShoppingList = function(shopList)
{
  for(var i = 0; i < shopList.length; i++)
  {
    console.log(shopList[i].itemName + " @ " + "R" + shopList[i].price);
  }

  return shopList;
}

var sList = [
  { itemName : 'Bread', price : 11.00 },
  { itemName : 'Milk', price : 7.00 },
  { itemName : 'Bread', price : 19.50 }];

var storeFunc = printShoppingList(sList);
assert.deepEqual(storeFunc, storeFunc);
