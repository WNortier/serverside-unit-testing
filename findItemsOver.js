module.exports = function findItemsOver(list, threshold) {
  var itemsOverThreshold = [];
  for (var i = 0; i < list.length; i++) {
    var listItem = list[i];
    if (listItem.qty > threshold) {
      itemsOverThreshold.push(listItem)
    }
    else if (typeof listItem.name === undefined) {
      listItem.name == listItem.name
    }
  }

  return itemsOverThreshold
}
