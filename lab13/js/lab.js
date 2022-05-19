// Authors: Pichy Jumpholwong and Zac Nakamura
// Created: 17 May 2022
// License: Public Domain

// create a "FizzBuzz" function
function fizzBuzzBoom() {
// Loop through numbers 1 to 200
  for (i=1; i<=200; i++) {
// If the number is a multiple of 3, 5, and 7, it should print "FizzBuzzBoom!"
    if (i % 105 == 0) {
      $("#output").append(i + "-FizzBuzzBoom!<br>");
      console.log("FizzBuzzBoom!");
    }
// If the number is a multiple of 5 and 7, it should print "BuzzBoom!"
    else if (i % 35 == 0) {
      $("#output").append(i + "-BuzzBoom!<br>");
      console.log("BuzzBoom!");
    }
// If the number is a multiple of 3 and 7, it should print "FizzBoom!"
    else if (i % 21 == 0) {
      $("#output").append(i + "-FizzBoom!<br>");
      console.log("FizzBoom!");
    }
// If the number is a multiple of 3 and 5, it should print "FizzBuzz!"
    else if (i % 15 == 0) {
      $("#output").append(i + "-FizzBuzz!<br>");
      console.log("FizzBuzz!");
    }
// If the number is a multiple of 7, it should print "Boom!"
    else if (i % 7 == 0) {
      $("#output").append(i + "-Boom!<br>");
      console.log("Boom!");
    }
// If the number is a multiple of 5, it should print "Buzz!"
    else if (i % 5 == 0) {
      $("#output").append(i + "-Buzz!<br>");
      console.log("Buzz!");
    }
// If the number is a multiple of 3, if should print "Fizz!"
    else if (i % 3 == 0) {
      $("#output").append(i + "-Fizz!<br>");
      console.log("Fizz!");
    }
    else {
      $("#output").append(i + "<br>");
      console.log(i);
    }
  }
}
