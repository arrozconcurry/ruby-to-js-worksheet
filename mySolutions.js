// to run file, uncomment each problem one at
  // a time. got to this folder and run
  // node mySolutions.js

//1.
// var personAge = 55;
// var adaAge = 2;
//
// if (personAge < adaAge) {
//   console.log('This person is younger');
// } else if (adaAge < personAge) {
//   console.log('Ada is younger');
// } else {
//   console.log('They\'re the same!');
// }

//2.
// var x = 7;
// var y = 7;
// if (x > y || x == y) {
//   if (x > y) {
//     console.log('x is bigger');
//   } else {
//     console.log('x = y');
//   }
// } else {
//   console.log('y is bigger');
// }

//3. a)
// for (var i = 0; i < 11; i++) {
//   console.log(i * i);
// }
//3. b)
// var i = 0;
// for (; i < 11; i++) {
//   console.log(i * i);
// }
//3. c) - this I needed to change it from
  // i < 11 (was 0) to i >= 10 (now 100)
// for (var i = 0;; i++) {
//   console.log(i * i);
//   if (i >= 10) break;
// }
//3. d) - this one I needed to change it from
  // i < 11 (went to 121) to i <10 (now 100)
// var i = 0;
// while (i < 10) {
//   i++;
//   console.log(i * i);
// }

// 4.
// for (var i = 1; i < 4; i++) {
//   console.log(i * i);
// }

// 5.
// var total = 0;
// for (var i = 1; i < 4; i++) {
//   total = total + i
// }
// console.log(total);

// 6.
// var i = 0;
// while (i < 3) {
//   console.log('hi');
//   i++;
// }

// 7.
// var i = 0;
// while (i < 3) {
//   console.log('hi');
//   i++;
// }
// console.log('bye');

// 8.
// var fruits = ["banana", "apple", "kiwi"];
// // This, is an infinite loop. SMH
// // while (fruits.length < fruits.length + 1) {
// //   console.log('I love '+ fruits + "!");
// // }
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// for(let fruit of fruits) {
//   console.log('I love ' + fruit + '!');
// }

// 9.
// var total = 0;
// var values = [4, 6, 2, 8, 11];
//
// for (let value of values) {
//   total = total + value;
// }
// console.log(total);

// 10.
var values = [8, 5, 3, 10, 14, 2];
for (let value of values) {
  if (value === 10) {
    console.log('Special case!');
  } else {
    console.log('Regular values like ' + value);
  }
}
