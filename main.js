$(document).ready(function(){$(".primary-color").css("color",primary_color);$(".primary-background").css("background-color",primary_color);$(".corner-button").click(function(){$(this).toggleClass("opened");});document.addEventListener("contextmenu",function(e){e.preventDefault();},false);});