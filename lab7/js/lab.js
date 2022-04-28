// Authors: Pichy Jumpholwong and Zac Nakamura
// Created: 26 April 2022
// License: Public Domain

function names() {
  var userName = window.prompt("Enter your name! ");
  console.log("Your name is ", userName);

  //split
  var nameSplit = userName.split(' ');
  console.log("The name split is ", nameSplit);

  // sort
  var nameSort = nameSplit.sort();
  console.log("The sorted name is ", nameSort);

  //join
  var nameJoin = nameSort.join('');
  console.log("The name joined is ", nameJoin);

  return nameJoin;
}

document.writeln("Check out your name: ", names(), "</br>");
