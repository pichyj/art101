function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Targaryen"
  }
  else if (mod == 1) {
    return "Lannister"
  }
  else if (mod == 2) {
    return "Stark"
  }
  else if (mod == 3) {
    return "Tyrell"
  }
  else if (mod == 4) {
    return "Baratheon"
  }
  else if (mod == 5) {
    return "Martell"
  }
  else if (mod == 6) {
    return "Tully"
  }
  else if (mod == 7) {
    return "Greyjoy"
  }
  else if (mod == 8) {
    return "Arryn"
  }
}

var button = document.getElementById("button");
button.addEventListener("click", function(){
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  assignedHouse = "<p>Your Game of Thrones House is House " + house + "!</p>";
  document.getElementById("output").innerHTML = assignedHouse;
})
