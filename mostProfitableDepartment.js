module.exports = function mostProfitableDepartment(salesData) {
  var successfulDept = "";
  var highestSale = 0;
  for (var i in salesData) {
    var aSalesEntry = salesData[i];
    var currentSale = aSalesEntry.sales;

    var currentDepartment = aSalesEntry.department;

    if (currentDepartment == undefined || currentDepartment == "") {
      return "invalid input"
    }

    else if (currentSale > highestSale) {
      highestSale = currentSale;
      successfulDept = currentDepartment;
    }
  }
  return successfulDept;
}