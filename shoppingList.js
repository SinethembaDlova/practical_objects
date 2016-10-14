const assert = require('assert');



var shoppingList = function(shopList)
{
  var total_price = 0;

    for(var i = 0; i < shopList.length; i++)
    {
        total_price = total_price + shopList[i].price;
    }

    return total_price;
}

var shoppingList1 = [
  { itemName : 'Bread', price : 11.00 },
  { itemName : 'Milk', price : 7.00 },
  { itemName : 'Cheese', price : 19.50 }];

var shoppingList2 = [
    { itemName : 'Apples', price : 7.50 },
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 23.00 },
    { itemName : 'Bread', price : 9.50 }];

var shoppingList3 = [
  { itemName : 'Coke', price : 10},
  { itemName : 'Peanuts', price : 25},
  { itemName : 'Biltong', price : 50},
  { itemName : 'Sweats', price : 15}];


assert.deepEqual(shoppingList(shoppingList1), 37.50);
assert.deepEqual(shoppingList(shoppingList2), 58);
assert.deepEqual(shoppingList(shoppingList3),100);
