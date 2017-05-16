// PART 1
// 1.
var hello = function () {
  console.log('hello');
};
hello();

// 2.
var sayNum = function (number) {
  console.log('Your number is ' + number + '.');
};
sayNum(15);

// 3.
var largerNum = function (num1, num2) {
  if (num1 >= num2) {
    console.log(num1);
  } else if (num2 > num1) {
    console.log(num2);
  }
};
largerNum(12, 3); // prints 12
largerNum(2, 20); // prints 20

// 4.
// re-writing 3. into functional declaration
function largerNum(num1, num2) {
  if (num1 >= num2) {
    console.log(num1);
  } else if (num2 > num1) {
    console.log(num2);
  }
}

// 5.
var output = function (items) {
  for (var item of items) {
    console.log(item);
  }
  // OR
  // items.forEach(function(item){
  //   console.log(item);
  // });
};
output(['potato', 'gravy', 'turkey']);
// printed their index because I had
  // 'in' instead of 'of'

// PART 2
// 1.
var zombies = function() {
  return "We like to eat people";
};

// 2.
var Calculator = function() {
  this.square = function (x) {
    return x * x;
  };
};
var my_calculator = new Calculator();

// 3.
console.log(function () {
  return "Hey hey hey";
}());
/* `}()` anonymous function call
 anything that is a function,
 can be invoked with paranthesis.
 If `}` w/o the `()` output is [Function]
 If a named function, JS would have given us
 [name] instead of [Function].
 Difference between a function object vs. calling a function 
 and working with return value.
 Quickly identify which one you're working with
*/

// 4.
var blabbermouth = function() { };
console.log(blabbermouth.name);

// 5.
