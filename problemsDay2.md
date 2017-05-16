# JavaScript Worksheet: Functions
For Part 1, read the code in each section, then write the equivalent JavaScript code for the Ruby that is given. Start by writing it out in a text editor or on a piece of paper. Then try running it and tweak your code until it successfully runs with expected output.
For Part 2, read and determine the output for each section.

**NOTE**: For each function you create, you should also write the code to call the function.

## Problem Set
### Part 1
1.
```ruby
def hello
  puts 'hello!'
end
```

2.
```ruby
def say_num(number)
  puts 'Your number is #{number}.'
end
```

3.
```ruby
def larger_num(num1, num2)
  if num1 >= num2
    num1
  elsif num2 > num1
    num2
  end
end
```

4.
Re-write #3: If you used a function expression, now write using a declaration, and vice versa.

5.
```ruby
def output(items)
  items.each do |item|
    puts item
  end
end
```

### Part 2
1.
Invoke the zombies function.
```javascript
var zombies = function() {
  return "We like to eat people";
};
```

2.
Call the `square()` method on the `my_calculator` object.
```javascript
var Calculator = function() {
  this.square = function (x) {
    return x * x;
  }
};
var my_calculator = new Calculator();
```

3.
What does the following code print to the console?
```javascript
console.log(function () {
  return "Hey hey hey";
}());
```

4.
What does the following code print to the console?
```javascript
var blabbermouth = function() { };
console.log(blabbermouth.name);
```

5.
Create a constructor function called `Square()` to create square objects with a side property and a method to calculate the area. Use the `Square()` function to create a square object.
