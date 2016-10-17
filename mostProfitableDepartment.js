const assert = require('assert');

var mostProfitableDepartment = function(database)
{
  var hardwareTotalSales = 0;
  var outdoorTotalSales = 0;
  var carpentryTotalSales = 0;

  for( var x = 0; x < database.length; x++)
  {
    if(database[x].department === 'hardware')
    {
      hardwareTotalSales += database[x].sales;
    }

    if(database[x].department === 'outdoor')
    {
      outdoorTotalSales += database[x].sales;
    }

    if(database[x].department === 'carpentry')
    {
      carpentryTotalSales += database[x].sales;
    }
  }

  if(hardwareTotalSales > (outdoorTotalSales && carpentryTotalSales))
  {
    return "The Hardware department was more profitable."
  }

  else if (outdoorTotalSales > (hardwareTotalSales && carpentryTotalSales))
  {
    return "The Outdoor department was more profitable."
  }

  else
  {
    return "The Carpentry department was more profitable."
  }


}

var salesData = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},];

var storeFunc = mostProfitableDepartment(salesData);
assert.equal(storeFunc, "The Outdoor department was more profitable.");
