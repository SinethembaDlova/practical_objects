const assert = require('assert');

var mostProfitableDay = function(database)
{
  var mondayTotalSales = 0;
  var tuesdayTotalSales = 0;
  var wednesdayTotalSales = 0;
  var thursdayTotalSales = 0;
  var fridayTotalSales = 0;

  for(var s = 0; s < database.length; s++)
  {
    if(database[s].day === 'Monday')
    {
      mondayTotalSales += database[s].sales;
    }

    if(database[s].day === 'Tuesday')
    {
      tuesdayTotalSales += database[s].sales;
    }

    if(database[s].day === 'Wednesday')
    {
      wednesdayTotalSales += database[s].sales;
    }

    if(database[s].day === 'Thursday')
    {
      thursdayTotalSales += database[s].sales;
    }

    if(database[s].day === 'Friday')
    {
      fridayTotalSales += database[s].sales;
    }
  }

  if(mondayTotalSales > (tuesdayTotalSales && wednesdayTotalSales && thursdayTotalSales && fridayTotalSales))
  {
    return "Monday was the most profitable day.";
  }

  else if(tuesdayTotalSales > (mondayTotalSales && wednesdayTotalSales && thursdayTotalSales && fridayTotalSales))
  {
    return "Tuesday was the most profitable day.";
  }

  else if(wednesdayTotalSales > (mondayTotalSales && tuesdayTotalSales && thursdayTotalSales && fridayTotalSales))
  {
    return "Wednesday was the most profitable day.";
  }

  else if(thursdayTotalSales > (mondayTotalSales && tuesdayTotalSales && wednesdayTotalSales && fridayTotalSales))
  {
    return "Thursday was the most profitable day.";
  }

  else
  {
    return "Friday was the most profitable day.";
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

var storeFunc = mostProfitableDay(salesData);
//console.log(storeFunc);
assert.deepEqual(storeFunc, "Thursday was the most profitable day.");
