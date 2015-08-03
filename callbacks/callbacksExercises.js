var funcCaller = function (func, arg) {
  return func(arg);
};

var firstVal = function(arr, func) {
  func(arr[0], 0, arr);
};

firstVal = function(list, func) {
  if(Array.isArray(list)) {
    return func(arr[0], 0, arr);
  } else {
    for (var k in list) {
      return func(list[k], k, list);
    }
    var propArr = Object.keys(list);
    func(list[propArr[0]], propArr[0], list);
  }
}
