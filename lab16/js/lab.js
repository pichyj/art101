// Authors: Pichy Jumpholwong and Zac Nakamura
// Created: 30 May 2022
// License: Public Domain

var endpoint = "https://xkcd.com/info.0.json";
// Using the core $.ajax() method
function getAjax() {
    $.ajax({
      url: endpoint,
    type: "GET",
  })
  .done(function(data){
      console.log("Worked!");
    var comicObj = data;
    console.log(comicObj);
    var title = comicObj.title;
    var img = comicObj.img;
    var alt = comicObj.alt;
    console.log(title, img, alt);
    $("#output").html("<h3>" + title + "</h3>");
    $("#output").append("<img src=" + img + ">");
    $("#output").append("<p>" + alt + "</p>");
  })
  .fail(function(request, error){
      $("#output").html("Something fucked up.");
  })
}
$("button").click(getAjax);
