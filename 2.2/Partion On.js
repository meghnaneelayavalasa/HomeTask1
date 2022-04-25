// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
  var f = 0
  for (var i = 0; i < items.length; ++i) {
    if (!pred(items[i]))
      items.splice(f++, 0, items.splice(i,1)[0])
  }
  return f
}