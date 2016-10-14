const assert = require('assert');


var findItemOver20 = function(overTwenty)
{
  var over20 = [];

  for( var i = 0; i < overTwenty.length; i++)
  {
    if (overTwenty[i].price > 20)
    {
      over20.push(overTwenty[i])
    }
  }
  return over20;
}

var itemList = [
    {name : 'apples', price : 10},
    {name : 'pears', price : 37},
    {name : 'bananas', price : 27},
    {name : 'apples', price : 3}];

var itemList2 = [
  {name : 'Sugar', price : 25},
  {name : 'Salt',  price : 13},
  {name : 'Spice', price : 15},
  {name : 'Meat',  price : 28}];

assert.deepEqual(findItemOver20(itemList), [ { name: 'pears', price: 37 }, { name: 'bananas', price: 27 } ]);
assert.deepEqual(findItemOver20(itemList2), [ { name : 'Sugar', price: 25 }, { name : 'Meat',  price: 28 } ]);
