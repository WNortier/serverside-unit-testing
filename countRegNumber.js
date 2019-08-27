module.exports = function countRegNumber(reg) {
    if (reg == "" || reg == undefined) {
        return "invalid input"
    }
    var theAmountOfRegistrations = reg.split(",");
    return theAmountOfRegistrations.length
}