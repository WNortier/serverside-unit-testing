module.exports = function countAllFromTown(list, aTown) {
  var numberOfTownRegs = [];
  var splittedList = list.split(",");
  for (var i = 0; i < splittedList.length; i++) {
    var allRegistrations = splittedList[i];
    var allRegistrationsTrimmed = allRegistrations.trim();
    if (allRegistrationsTrimmed.startsWith(aTown) || allRegistrationsTrimmed.endsWith(aTown))
      numberOfTownRegs.push(allRegistrationsTrimmed);
  }
  return (numberOfTownRegs.length);
}
