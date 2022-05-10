// Authors: Pichy Jumpholwong and Zac Nakamura
// Created: 9 May 2022
// License: Public Domain

buttonEl = document.getElementById("my-button");
// find the form element
inputEl = document.getElementById("user-name");
// find output element
outputEl = document.getElementById("output");
// add event listener to button
buttonEl.addEventListener("click", function(){
  // get value from name element
  var userName = inputEl.value;
  // splitting the string into an array
  var nameSplit = userName.split('');
  // sorting the array
  var nameSort = nameSplit.sort();
  // joining array back to a string
  var nameJoin = nameSort.join('');
  // output element
  outputEl.innerHTML = "<p id=name-results>" + nameJoin + "</p>";
});
