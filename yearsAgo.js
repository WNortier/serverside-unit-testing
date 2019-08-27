module.exports = function yearsAgo(year) {
    var newDate = new Date();
    var howLongAgo = newDate.getFullYear() - year;
    return howLongAgo;
}
