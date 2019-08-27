module.exports = function findItemsOver20(list) {
  var itemsOver20 = [];
  for (var i = 0; i < list.length; i++) {
    var listItem = list[i];
    if (listItem.qty > 20) {
      itemsOver20.push(listItem)
    }
    else {
      return "no items over threshold"
    }
  }
  return (itemsOver20);

}