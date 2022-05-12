// Authors: Pichy Jumpholwong and Zac Nakamura
// Created: 10 May 2022
// License: Public Domain

$("#text1").hide();
$("#button1").click(function(){
  $("#text1").show();
  $("#text1").parent().toggleClass("special");
})

// problems show text
$("#text2").hide();
$("#button2").click(function(){
  $("#text2").show();
  $("#text2").parent().toggleClass("special");
})

// results show text
$("#text3").hide();
$("#button3").click(function(){
  $("#text3").show();
  $("#text3").parent().toggleClass("special");
})
