// Authors: Pichy Jumpholwong and Zac Nakamura
// Created: 26 May 2022
// License: Public Domain

function getAjax() {
	$.ajax({
  	url: "https://xkcd.com/info.0.json",
    type: "GET"
  })
  .done(function(data){
  	$("#output").append("<h3>" + data.title + "</h3>");
  	$("#output").append("<img src=" + data.img + ">");
  	$("#output").append("<p>" + data.alt);
  })
  .fail(function(request, error){
  	$("#output").html("Uh oh, there's an issue.");
  })
}

$("button").click(getAjax);
