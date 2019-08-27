module.exports = function totalPhoneBill(list) {
  var splittedList = list.split(", ");
  var numberOfCalls = [];
  var numberOfSms = [];
  var costOfCall = 2.75;
  var costOfSms = 0.65;
  for (var i = 0; i < splittedList.length; i++) {
    var allExpenses = splittedList[i];
    if (list == "" || list == undefined) {
      return "R0.00"
    }
    else if (allExpenses.startsWith('c')) {
      numberOfCalls.push(allExpenses);
    }
    else {
      numberOfSms.push(allExpenses);
    }
    var howManySms = numberOfSms.length;
    var howManyCalls = numberOfCalls.length;
    var totalSms = howManySms * costOfSms;
    var totalCalls = howManyCalls * costOfCall;
    var total = totalSms + totalCalls;
  }
  return ("R" + total.toFixed(2));
}