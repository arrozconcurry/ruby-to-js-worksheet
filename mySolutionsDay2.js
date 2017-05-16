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


// 2.
