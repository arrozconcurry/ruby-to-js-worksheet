// Ex. 1
var toDo = {
  description: 'homework',
  assignee: 'kaitlin',
  done: true,
  printStatus: function() {
    console.log('Has ' + this.assignee + ' completed ' + this.description + '? ' + this.done);
  }
};
toDo.printStatus();

// Ex. 2
var arrayOfNums = [2, 7, 7, 3, 9, 0, 1, 6, 8, 3, 8, 4, 9];
var getBiggest = function(array) {
  var max = array[0];
  array.forEach(function(num) {
    if (num >= max) {
      max = num;
    }
  });
  return max;
};

var biggest = getBiggest(arrayOfNums);
console.log('The biggest is: ', biggest);
