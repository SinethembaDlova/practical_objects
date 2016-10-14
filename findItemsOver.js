const assert = require('assert');

var findItemsOver = function(items,threshold)
{
    var over20 = [];

    for(var i = 0; i <items.length; i++)
    {
      if(items.price > threshold)
      {
        over20.push(items[i]);
      }
    }

    return over20;
}

var itemList = [
    {name : 'apples', price : 10},
    {name : 'pears', price : 37},
    {name : 'bananas', price : 27},
    {name : 'apples', price : 3}];


assert.deepEqual(findItemsOver(itemList,20), [ { name: 'pears', price: 37 }, { name: 'bananas', price: 27 } ] );
