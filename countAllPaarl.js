module.exports = function countAllPaarl(list) {
  var numberOfPaarlRegs = [];
  var splittedList = list.split(",");
  for (var i = 0; i < splittedList.length; i++) {
    var allRegistrations = splittedList[i];
    var test = allRegistrations.trim()
    console.log(test)
    if (test.startsWith('CJ')) {
      numberOfPaarlRegs.push(test);
    } else if
      (list == "" || list == undefined) {
      return 0
    }
  }
  return numberOfPaarlRegs.length;
}

